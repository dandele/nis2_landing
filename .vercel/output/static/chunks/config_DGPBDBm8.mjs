const astroConfig = {"base":"/","root":"file:///Users/dandele/Desktop/%201%20-%20Roles/NIS2/NIS2/","srcDir":"file:///Users/dandele/Desktop/%201%20-%20Roles/NIS2/NIS2/src/","build":{"assets":"_astro"},"markdown":{"shikiConfig":{"langs":[]}}};
const ecIntegrationOptions = {};
let ecConfigFileOptions = {};
try {
	ecConfigFileOptions = (await import('./ec-config_CzTTOeiV.mjs')).default;
} catch (e) {
	console.error('*** Failed to load Expressive Code config file "file:///Users/dandele/Desktop/%201%20-%20Roles/NIS2/NIS2/ec.config.mjs". You can ignore this message if you just renamed/removed the file.\n\n(Full error message: "' + (e?.message || e) + '")\n');
}

export { astroConfig, ecConfigFileOptions, ecIntegrationOptions };
