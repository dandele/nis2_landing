import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_B9XEKzn8.mjs';
import { a as createComponent, i as renderUniqueStylesheet, j as renderScriptElement, k as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_D7qnCaNf.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://screwfast.uk", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_DnWg6sPR.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_ZdC4W276.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_LsfXKzGH.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_BTdXeLxy.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_B3HzoRnc.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_B_a1E2zm.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_uVhn3I4w.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_CyfAKXf-.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_BPgpboQu.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_Dc0-SlwE.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_A-XNCmYK.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CMbbzqDz.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_Cj5BFOgh.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_D8-s00UD.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_Dg9TmBxN.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DZfPx2bW.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_CSeog3kG.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_DTF_K1Gy.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_BBbZiWyQ.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_Celr57op.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_hg1iEA3a.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_jOGHjUZs.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_Bke3rzwK.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CDtVjNry.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_DHpDb7Ak.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_BMyJQVvU.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_C8IIDgOF.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CNwNBWC4.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_pwMr20nZ.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_VyjZ73zw.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_CgodWloy.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_BVhGvMn-.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_VuO4CzUg.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_DZWCkdVx.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_BbBqKe1H.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_DlMCfwEb.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_BOfJncQO.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_ZsAwfpRe.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_B7qGvrL7.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_U51qGgiY.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_BMnz-M75.mjs'),"/src/content/insights/en/insight-1.md": () => import('./insight-1_DBOp-yy-.mjs'),"/src/content/insights/en/insight-2.md": () => import('./insight-2_wXDaCCHB.mjs'),"/src/content/insights/en/insight-3.md": () => import('./insight-3_TIC6BjbI.mjs'),"/src/content/insights/fr/insight-1.md": () => import('./insight-1_B4yNMuyi.mjs'),"/src/content/insights/fr/insight-2.md": () => import('./insight-2_CzK8VAUn.mjs'),"/src/content/insights/fr/insight-3.md": () => import('./insight-3_CEXRaIhX.mjs'),"/src/content/products/en/item-a765.md": () => import('./item-a765_ChZKZeGw.mjs'),"/src/content/products/en/item-b203.md": () => import('./item-b203_Dmzrrt00.mjs'),"/src/content/products/en/item-f303.md": () => import('./item-f303_YILukIZY.mjs'),"/src/content/products/en/item-t845.md": () => import('./item-t845_BvpfstQ0.mjs'),"/src/content/products/fr/item-a765.md": () => import('./item-a765_C9kviG1o.mjs'),"/src/content/products/fr/item-b203.md": () => import('./item-b203_C96wRkL2.mjs'),"/src/content/products/fr/item-f303.md": () => import('./item-f303_Cz9BSLWh.mjs'),"/src/content/products/fr/item-t845.md": () => import('./item-t845_BJrF2Mu5.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"docs":{"type":"content","entries":{"welcome-to-docs":"/src/content/docs/welcome-to-docs.mdx","advanced/technical-specifications":"/src/content/docs/advanced/technical-specifications.mdx","construction/custom-solutions":"/src/content/docs/construction/custom-solutions.mdx","construction/safety":"/src/content/docs/construction/safety.mdx","construction/service-overview":"/src/content/docs/construction/service-overview.mdx","construction/project-planning":"/src/content/docs/construction/project-planning.mdx","de/welcome-to-docs":"/src/content/docs/de/welcome-to-docs.mdx","fa/welcome-to-docs":"/src/content/docs/fa/welcome-to-docs.mdx","es/welcome-to-docs":"/src/content/docs/es/welcome-to-docs.mdx","fr/welcome-to-docs":"/src/content/docs/fr/welcome-to-docs.mdx","guides/first-project-checklist":"/src/content/docs/guides/first-project-checklist.mdx","guides/intro":"/src/content/docs/guides/intro.mdx","guides/getting-started":"/src/content/docs/guides/getting-started.mdx","tools/equipment-care":"/src/content/docs/tools/equipment-care.mdx","tools/tool-guides":"/src/content/docs/tools/tool-guides.mdx","zh-cn/welcome-to-docs":"/src/content/docs/zh-cn/welcome-to-docs.mdx","ja/welcome-to-docs":"/src/content/docs/ja/welcome-to-docs.mdx","fa/guides/first-project-checklist":"/src/content/docs/fa/guides/first-project-checklist.mdx","fa/guides/getting-started":"/src/content/docs/fa/guides/getting-started.mdx","fa/guides/intro":"/src/content/docs/fa/guides/intro.mdx","de/guides/first-project-checklist":"/src/content/docs/de/guides/first-project-checklist.mdx","de/guides/intro":"/src/content/docs/de/guides/intro.mdx","fr/guides/first-project-checklist":"/src/content/docs/fr/guides/first-project-checklist.mdx","de/guides/getting-started":"/src/content/docs/de/guides/getting-started.mdx","fr/guides/getting-started":"/src/content/docs/fr/guides/getting-started.mdx","fr/guides/intro":"/src/content/docs/fr/guides/intro.mdx","es/guides/first-project-checklist":"/src/content/docs/es/guides/first-project-checklist.mdx","es/guides/getting-started":"/src/content/docs/es/guides/getting-started.mdx","es/guides/intro":"/src/content/docs/es/guides/intro.mdx","zh-cn/guides/first-project-checklist":"/src/content/docs/zh-cn/guides/first-project-checklist.mdx","zh-cn/guides/getting-started":"/src/content/docs/zh-cn/guides/getting-started.mdx","zh-cn/guides/intro":"/src/content/docs/zh-cn/guides/intro.mdx","ja/guides/first-project-checklist":"/src/content/docs/ja/guides/first-project-checklist.mdx","ja/guides/getting-started":"/src/content/docs/ja/guides/getting-started.mdx","ja/guides/intro":"/src/content/docs/ja/guides/intro.mdx"}},"blog":{"type":"content","entries":{"en/post-1":"/src/content/blog/en/post-1.md","en/post-3":"/src/content/blog/en/post-3.md","en/post-2":"/src/content/blog/en/post-2.md","fr/post-1":"/src/content/blog/fr/post-1.md","fr/post-2":"/src/content/blog/fr/post-2.md","fr/post-3":"/src/content/blog/fr/post-3.md"}},"insights":{"type":"content","entries":{"en/insight-1":"/src/content/insights/en/insight-1.md","en/insight-2":"/src/content/insights/en/insight-2.md","en/insight-3":"/src/content/insights/en/insight-3.md","fr/insight-2":"/src/content/insights/fr/insight-2.md","fr/insight-3":"/src/content/insights/fr/insight-3.md","fr/insight-1":"/src/content/insights/fr/insight-1.md"}},"products":{"type":"content","entries":{"en/item-f303":"/src/content/products/en/item-f303.md","en/item-a765":"/src/content/products/en/item-a765.md","en/item-b203":"/src/content/products/en/item-b203.md","en/item-t845":"/src/content/products/en/item-t845.md","fr/item-a765":"/src/content/products/fr/item-a765.md","fr/item-b203":"/src/content/products/fr/item-b203.md","fr/item-t845":"/src/content/products/fr/item-t845.md","fr/item-f303":"/src/content/products/fr/item-f303.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/en/post-1.md": () => import('./post-1_DA9DZDlq.mjs'),"/src/content/blog/en/post-2.md": () => import('./post-2_favinxcU.mjs'),"/src/content/blog/en/post-3.md": () => import('./post-3_BEsP2URh.mjs'),"/src/content/blog/fr/post-1.md": () => import('./post-1_Dr2t-2ql.mjs'),"/src/content/blog/fr/post-2.md": () => import('./post-2_CgWtzKel.mjs'),"/src/content/blog/fr/post-3.md": () => import('./post-3_cu1E8CUr.mjs'),"/src/content/docs/advanced/technical-specifications.mdx": () => import('./technical-specifications_bbrihBaK.mjs'),"/src/content/docs/construction/custom-solutions.mdx": () => import('./custom-solutions_M2rWUCyG.mjs'),"/src/content/docs/construction/project-planning.mdx": () => import('./project-planning_D0nX5Zkm.mjs'),"/src/content/docs/construction/safety.mdx": () => import('./safety_DjlRFvfD.mjs'),"/src/content/docs/construction/service-overview.mdx": () => import('./service-overview_CscSJz_w.mjs'),"/src/content/docs/de/guides/first-project-checklist.mdx": () => import('./first-project-checklist_oNS5nZw2.mjs'),"/src/content/docs/de/guides/getting-started.mdx": () => import('./getting-started_DZMKZkn-.mjs'),"/src/content/docs/de/guides/intro.mdx": () => import('./intro_DU_642XI.mjs'),"/src/content/docs/de/welcome-to-docs.mdx": () => import('./welcome-to-docs_Qs3DTMDQ.mjs'),"/src/content/docs/es/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DY6geCzP.mjs'),"/src/content/docs/es/guides/getting-started.mdx": () => import('./getting-started_DoaV3HCE.mjs'),"/src/content/docs/es/guides/intro.mdx": () => import('./intro_BxEbdjvF.mjs'),"/src/content/docs/es/welcome-to-docs.mdx": () => import('./welcome-to-docs_DHK-Ys8-.mjs'),"/src/content/docs/fa/guides/first-project-checklist.mdx": () => import('./first-project-checklist_B0vQdW33.mjs'),"/src/content/docs/fa/guides/getting-started.mdx": () => import('./getting-started_dNhyWUVt.mjs'),"/src/content/docs/fa/guides/intro.mdx": () => import('./intro_2sZoZ8v2.mjs'),"/src/content/docs/fa/welcome-to-docs.mdx": () => import('./welcome-to-docs_DTk-JX2b.mjs'),"/src/content/docs/fr/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DCygnybt.mjs'),"/src/content/docs/fr/guides/getting-started.mdx": () => import('./getting-started_DLJCtRL8.mjs'),"/src/content/docs/fr/guides/intro.mdx": () => import('./intro_F2-kQIf5.mjs'),"/src/content/docs/fr/welcome-to-docs.mdx": () => import('./welcome-to-docs_b25DDz0v.mjs'),"/src/content/docs/guides/first-project-checklist.mdx": () => import('./first-project-checklist_fcqU8Ijt.mjs'),"/src/content/docs/guides/getting-started.mdx": () => import('./getting-started_BgHhaF8x.mjs'),"/src/content/docs/guides/intro.mdx": () => import('./intro_VaWqc_Cu.mjs'),"/src/content/docs/ja/guides/first-project-checklist.mdx": () => import('./first-project-checklist_DKFjWEjw.mjs'),"/src/content/docs/ja/guides/getting-started.mdx": () => import('./getting-started_BFdMdtvI.mjs'),"/src/content/docs/ja/guides/intro.mdx": () => import('./intro_C1DsGPzQ.mjs'),"/src/content/docs/ja/welcome-to-docs.mdx": () => import('./welcome-to-docs_DinN22Sl.mjs'),"/src/content/docs/tools/equipment-care.mdx": () => import('./equipment-care_B3-O017u.mjs'),"/src/content/docs/tools/tool-guides.mdx": () => import('./tool-guides_CImWlh--.mjs'),"/src/content/docs/welcome-to-docs.mdx": () => import('./welcome-to-docs_TeVZfgHG.mjs'),"/src/content/docs/zh-cn/guides/first-project-checklist.mdx": () => import('./first-project-checklist_B07wxd_B.mjs'),"/src/content/docs/zh-cn/guides/getting-started.mdx": () => import('./getting-started_y0fyh5uA.mjs'),"/src/content/docs/zh-cn/guides/intro.mdx": () => import('./intro_JIXOkfld.mjs'),"/src/content/docs/zh-cn/welcome-to-docs.mdx": () => import('./welcome-to-docs_CHdn8JlP.mjs'),"/src/content/insights/en/insight-1.md": () => import('./insight-1_DqR1djTN.mjs'),"/src/content/insights/en/insight-2.md": () => import('./insight-2_CpsPqWqk.mjs'),"/src/content/insights/en/insight-3.md": () => import('./insight-3_nsPoyb8Z.mjs'),"/src/content/insights/fr/insight-1.md": () => import('./insight-1_Cngbi0Aw.mjs'),"/src/content/insights/fr/insight-2.md": () => import('./insight-2_CXKHLLnm.mjs'),"/src/content/insights/fr/insight-3.md": () => import('./insight-3_B4TB7vve.mjs'),"/src/content/products/en/item-a765.md": () => import('./item-a765_CD4UxGrv.mjs'),"/src/content/products/en/item-b203.md": () => import('./item-b203_BWmbYGjS.mjs'),"/src/content/products/en/item-f303.md": () => import('./item-f303_A0XNj7Nv.mjs'),"/src/content/products/en/item-t845.md": () => import('./item-t845_hwlbZuCS.mjs'),"/src/content/products/fr/item-a765.md": () => import('./item-a765_DzG_Pmad.mjs'),"/src/content/products/fr/item-b203.md": () => import('./item-b203_Dg4sIDOS.mjs'),"/src/content/products/fr/item-f303.md": () => import('./item-f303_Ck03xApE.mjs'),"/src/content/products/fr/item-t845.md": () => import('./item-t845_BY1-kqFE.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
