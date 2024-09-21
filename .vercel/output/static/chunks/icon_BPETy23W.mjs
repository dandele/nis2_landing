const icon = new Proxy({"src":"/_astro/icon.BJD5tiNw.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/images/icon.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/dandele/Desktop/ 1 - Roles/NIS2/NIS2/src/images/icon.png");
							return target[name];
						}
					});

export { icon as i };
