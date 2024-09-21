import { F as Fragment, _ as __astro_tag_component__, n as createVNode } from './astro/server_D7qnCaNf.mjs';
import { $ as $$Image } from './_astro_assets_C1gE2Nyu.mjs';
import { p as $$Card } from './Code_BenouHFB.mjs';
import 'clsx';

const frontmatter = {
  "title": "Project Planning and Management",
  "description": "Explore ScrewFast's comprehensive documentation for an in-depth look at our premium tools and construction services.",
  "sidebar": {
    "label": "Project Planning",
    "order": 2
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
      "set:html": "<p>Achieve seamless project execution with ScrewFast’s meticulous planning and management approach. We prioritize clear communication and strategic planning to ensure your project milestones are achieved without compromise.</p>\n"
    }), createVNode($$Card, {
      title: "Our planning and management services include:",
      icon: "seti:notebook",
      "set:html": "<ul>\n<li>Detailed project timelines</li>\n<li>Resource allocation and optimization</li>\n<li>Regular progress updates and reports</li>\n<li>Risk assessment and management</li>\n</ul>"
    }), "\n", createVNode(_components.p, {
      "set:html": "We believe in proactive management to foresee potential challenges and devise solutions before they impact the project."
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

const url = "src/content/docs/construction/project-planning.mdx";
const file = "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/content/docs/construction/project-planning.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/content/docs/construction/project-planning.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
