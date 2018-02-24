const jwt = require('./index');
const fs = require('fs');
let cert = fs.readFileSync('/Users/viper/jwtRS256.key');
let alg = 'PBES2-HS256+A128KW'
const ALG_RE = /^(PBES2-HS(256|384|512)\053)?(RSA-OAEP|dir|A(128|192|256)KW)$/;
let aMatch = typeof alg === 'string' ? alg.match(ALG_RE) : null;

//console.log(aMatch);
// exp = (new Date().getTime() + 60 * 1000) / 1000
// jwt.sign({
// 	foo: 'bar',
// 	"exp": exp
// }, cert, {
// 	algorithm: 'RSA-OAEP',
// 	encrypt: 'A128GCM'
// }, function (err, data) {
// 	if (err) console.log(err)
// 	else console.log(data)
// })

// jwt.sign({
// 	foo: 'bar'
// }, cert, {
// 	algorithm: 'RS256',
// }, function (err, data) {
// 	console.log(err);
// 	console.log(data);
// })

//token = 'MOpxR8PcazBVoUA9I0Wyi9ILWN9gePg6soHEdkNnffWXtCspp4FWusjO7i2bKVLpw4S2ClHlXYphOyKU5KgdoPGubWxckhadsmRirxGBbEbZ_j1n5RrZyhx2QrO4yJC7xEGCAxFefATirb4H9B4FEd8ayFP0qT1CbfKTpLNLVv8sORkl6aU9jxni7CaNtwbI3n5IY4IvdAwrncrhsAQYoaRzs1V3bOOFQG3jYZERMtMdLXm_h8BCG_66oP4KNyKHjzgFakN9KmcO_DTe6UUUnDn95T-fYwcNd9HtiGpfuJgoBRmVc_sSbddg-CVCpFfPSd_zBmXpoq24cao1T5NOVd8A1UqKxgo8gMqqGl_6DtTmLtjl2S12VMuu535bGfK_eAJoVL8cYa9gcIDsKkJ17BpfMzSg1-A9fVvMHyYO8AFmdtlN54lya015gWLz88qi7eY9G4n35CCyugD3258wmC0uNglJtf806NFYP5CQn2jnWiZCZOaDx-zcyH7Sb8SMjnpgH3vTL82M1U6M.pOj4CcmFBKBLQszD.n10pfnPw3T2QjuK5xsAFtCj3T9rvoXvvyabuz_5Z.sggxIyKWNltVDYyhUSifVg'
token = 'eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkExMjhHQ00iLCJ0eXAiOiJKV0UifQ.Oam4FTiXc83EmHgrRVsm0My1Z2sQZoSBgEvZx8hECSw0RAswB3mLlfvvj9Hwhn6LjOMJim2qdZc8SE5iUCxgradU5m8U3dXbgo7OA1HKR3HH9zG3CBoUxCf9pBpIb_pRzYTLq_e1HxizD1i75qI6nO3T_qFSsEvGC5D1ePWx4YqrFvLUanhgh7BJUlkcHMx6xgirdN9I2ajmk17POOMCUd5-mLcixG9iBehz64CmpPR9p6SSLBNQbNaXTJ89aEL9qBQtgrmGAv4Gi_ilZG05PQZJXyBQrUW4eOxXzmm_xxTsj8UhnwZBU2PJV1W_y8GMBow-QYVBco59hyKIOyOtYbb-QiNBnrpsRRvs4BNAOsw8FVMJK9AyZMNrjVsxsNerne5BogZAbyhVbg5vlzd89tFZ_I2725OvosNs0JVCaMzwhLyiQue7hrBfszTSlcPAMfF05gUJqZkY6Tn90qgCGSxjHNcRf55dboIuITvdQqjs5hN9swo7WkGTNuxnSRQFjhqZHj980acE2AynHaQUe4bhAI7d6SHTOEDXQ4zuugDoxR_0mxalE9R1hHtnTcjkymsViF24X9jcLC_-mnqvVRceX_j3kEOtZo-DN_xypdaQsxQn2lggnlUR8EnjbuYWw51fIcNL-yhtr87L6LciAFPX7g2y_P9RNwaO4hFxNcY.ffWarlKF9m-NSiG2.Sfii8XGH6zBPRlyApJWm2TukP5jgX9NAoRoZjm4ILrP4OCIB0SYgC1wc0jJ1LgmhMeLr.t4PBkr5rL6lp4FPCrxCmug'
// jwt.verify({
// 	foo: 'bar'
// }, cert, function (err, data) {
// 	console.log(data);
// })


jwt.verify(token, cert, function (err, decoded) {
	if (err) console.log(err)
	else console.log(decoded) // bar
});
