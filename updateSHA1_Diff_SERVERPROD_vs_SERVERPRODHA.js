/**
 * Punto de entrada para actualizar
 * en mongodb los chechsums(sha1) del respositorio 
 * ATG Layering:
 * svn: //172.17.203.59:3691/liverpool/informatica/sistemas/sisope/ecommerce_v11_3/branches/environment/env-configuration
 * colocandolo en /tmp/liv_atg_layering_config
 */

var ATGLayeringConsistencyAPI = require('./ATGLayeringConsistencyAPI')

console.log("Starting find diff SERVERPROD vs SERVERPRODHA checksums: " + Date(Date.now()).toLocaleString('es-MX'))

ATGLayeringConsistencyAPI.updateSHA1_Diff_SERVERPROD_vs_SERVERPRODHA().then((res) => {
    console.log("Sucessfully finished at: " + Date(Date.now()).toLocaleString('es-MX'))
    console.log("Recorded Differeneces: " + res.insertedCount)
});