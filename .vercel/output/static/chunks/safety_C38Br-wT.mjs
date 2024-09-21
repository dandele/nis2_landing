import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_D7qnCaNf.mjs';
import { $ as $$Image } from './_astro_assets_C1gE2Nyu.mjs';
import { p as $$Card, r as $$LinkCard, o as $$CardGrid } from './Code_B3rKdMOx.mjs';
import 'clsx';

const frontmatter = {
  "title": "Safety Protocols and Procedures",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Safety Protocols",
    "order": 3
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Safety is at the core of everything we do at ScrewFast. Our comprehensive safety protocols and procedures are designed to protect our team, clients, and the integrity of your project.</p>\n"
    }), createVNode($$Card, {
      title: "Key features of our safety commitment include:"
    }), "\n", createVNode($$LinkCard, {
      title: "Rigorous safety training for all personnel",
      href: "/guides/getting-started"
    }), "\n", createVNode($$CardGrid, {
      children: [createVNode($$LinkCard, {
        title: "Regular safety audits and compliance checks",
        href: "/guides/getting-started"
      }), createVNode($$LinkCard, {
        title: "Emergency response plans and drills",
        href: "/guides/getting-started"
      })]
    }), "\n", createVNode(_components.p, {
      "set:html": "By integrating safety into our daily operations, we create a secure working environment without compromising on quality and productivity."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/construction/safety.mdx";
const file = "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/content/docs/construction/safety.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/content/docs/construction/safety.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
