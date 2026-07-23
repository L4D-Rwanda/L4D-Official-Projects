const fs = require('fs');
let content = fs.readFileSync('constants.tsx', 'utf-8');

const correctIds = [
"1irDNc0D5xecAMVdDM1j-yYLKiSmBIUpZ",
"1rJwR1qIxjQe8PKkVMNReARlp3LY-01V8",
"1HNRnuUniEuZlZgxpJE0xf_VTVFIzs0bU",
"1Lb0wtMXRePoeV_yBDv6-Grg6hyN3RpI7",
"1j1mmdoKZafU-_EFA4oz2J-Lp1AnUREU1",
"1pj04BXKJ7en7Qvp3i91yKcDajrBpuzzy",
"1GkyFZqIRrmXw66I9tDGp_wYCFlNmq_s9",
"1ixX9b01j9A1u9nZysMaqMx5dfNyTiaXF",
"1yjY_MvNI-W8wroTs2ov-c4Z7OR0DltCp",
"1E87NEY2tMGgFqUjSCk9x9B93H_peDPaP",
"1HnvS9xgaj5Pugi8_VwgvhePAur1PhX-m",
"1_O1HeJGeyy_uhb9nQZagZNkbrK1nIeA8",
"1deXGC8pPxMHF2MGGEj0U0Vkpfqrr6FmI",
"1XupACUJmY2EUYIuis1Rp8gEyzGcQNL-r",
"1Y0EguvtDeSe9_D4DjDUfKVIMEEJyl_vJ",
"153gEk5jxMnez80kiSkgJQwLO6kUXtNsd",
"1gezW2xAyHMesrR3lrahjywRR2W3LlOP2",
"1y-eFqaDvaTT_lYA5xXoPx5F0MFW6RDGc",
"1WpPRZVvvHcYQxsqrRnY6q3D8ppgsI6Nh",
"1glB43dFgwNuoqXeIqIX6Lt4RJtkJ_lqA",
"1jSFBS8bM-qYp1rhgdv4yfQgVY_H6zZEv",
"15iYDCMzQm5QAQDOJYe0j02vLTJw97ONd",
"1nkP5GZp2x6H4Bg38p5_G2ppSkkuXL6Qg",
"1Ptf_32OZDRXC_LZHWTA6hvmxSBO44Eqq",
"13_kZoFpSnpSxSr6tDg7FxSrPmbKdQ4wm",
"1HXOjGqUMEcvQr3BSsZRVKTXNxnfjs2l0",
"15rlBHijykIqPW9MaGgYQ4mntqIX1-SiY",
"1WB0888fN67U23kY6M3mPjurQjNLqXOBV",
"1LVO1LtvsOnLQf11IXFm68HDblOAT3v1E",
"1lD2XP05H__pWWbl37d6PvnKOeuHpRykr"
];

let i = 0;
content = content.replace(/logo:\s*"\/images\/partners\/[^"]+"/g, () => {
  if (i < correctIds.length) {
    return `logo: "https://lh3.googleusercontent.com/d/${correctIds[i++]}"`;
  }
  return `logo: ""`;
});

fs.writeFileSync('constants.tsx', content);
console.log("Restored logos back to gdrive!");
