// Data from https://www.wolfram.com/knowledgebase/source-information/?page=GalaxyData
// Using the results from: https://github.com/buckldav/wolfram-hubbles-law/blob/main/hubble.nb
const galaxies = [
  {
    name: "Andromeda II",
    velocity: "-188. kilometers per second",
    distance: "0.664 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/535/535fafde247f99bfa6fef532015fd60f_v001s.jpg",
  },
  {
    name: "Andromeda III",
    velocity: "-351.1 kilometers per second",
    distance: "0.751 megaparsecs",
    image: "",
  },
  {
    name: "Andromeda IV",
    velocity: "256. kilometers per second",
    distance: "6.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/50f/50f40a2a53268b4c3544826657426235_v001s.jpg",
  },
  {
    name: "Andromeda V",
    velocity: "-402.9 kilometers per second",
    distance: "0.785 megaparsecs",
    image: "",
  },
  {
    name: "Andromeda VI",
    velocity: "-354.1 kilometers per second",
    distance: "0.796 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ebb/ebb447a61133513b7fa28186f606b544_v001s.jpg",
  },
  {
    name: "Andromeda VII",
    velocity: "-307.0 kilometers per second",
    distance: "0.756 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/cb4/cb426e8a11dd868751021f8359ef9df3_v001s.jpg",
  },
  {
    name: "Antlia 2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "0.1294 megaparsecs",
    image: "",
  },
  {
    name: "Antlia Dwarf Galaxy",
    velocity: "362.1 kilometers per second",
    distance: "1.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/dfd/dfd3af6c160093d2692a6afb0f602a50_v001s.jpg",
  },
  {
    name: "Boötes Dwarf Galaxy",
    velocity: "6.6 kilometers per second",
    distance: "0.0604 megaparsecs",
    image: "",
  },
  {
    name: "Canes Venatici Dwarf Galaxy",
    velocity: "     1\n9. 10  kilometers per second",
    distance: "0.22 megaparsecs",
    image: "",
  },
  {
    name: "Canis Major Dwarf Galaxy",
    velocity: "81. kilometers per second",
    distance: "      4\n2.5 10  light years",
    image: "",
  },
  {
    name: "Carina Dwarf Galaxy",
    velocity: "229. kilometers per second",
    distance: "0.10 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/843/843d9654b3b6ac9b6ee5f6f141f9c4e7_v001s.jpg",
  },
  {
    name: "Cetus Dwarf Galaxy",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "0.762 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/994/994310ced669bc74f710f4863b82fc07_v001s.jpg",
  },
  {
    name: "Draco Dwarf Galaxy",
    velocity: "-292. kilometers per second",
    distance: "0.082 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f72/f723d51e1f71364b687a058adb7982f1_v001s.jpg",
  },
  {
    name: "Fornax Dwarf Galaxy",
    velocity: "53.4 kilometers per second",
    distance: "0.14 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/115/1158a9a39a0b40afcdfa2e849c16e81a_v001s.jpg",
  },
  {
    name: "GN-z11",
    velocity: "        6\n3.325 10  kilometers per second",
    distance: "       10\n3.23 10   light years",
    image: "",
  },
  {
    name: "HD1",
    velocity: "       6\n4.56 10  kilometers per second",
    distance: "       10\n3.44 10   light years",
    image: "",
  },
  {
    name: "HD2",
    velocity: "       6\n3.69 10  kilometers per second",
    distance: "      10\n3.3 10   light years",
    image: "",
  },
  {
    name: "IC 10",
    velocity: "-348.0 kilometers per second",
    distance: "0.7965 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/42b/42b65ca5ba80ac43c5b88a8302e4ddcb_v001s.jpg",
  },
  {
    name: "IC 100",
    velocity: "5228. kilometers per second",
    distance: "77.269 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c22/c2228d12208ebd3860720dd65621d699_v001s.jpg",
  },
  {
    name: "IC 1000",
    velocity: "      3\n5.6 10  kilometers per second",
    distance: "83.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/14a/14a8d12a867ffaca46fdbc249e40df39_v001s.jpg",
  },
  {
    name: "IC 1001",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/250/250c7e8c1d4a639661879a8eec3eee16_v001s.jpg",
  },
  {
    name: "IC 1002",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d6b/d6bc1c2b5061b2d3199ea54f786fac98_v001s.jpg",
  },
  {
    name: "IC 1003",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c09/c098db78a3ac46f98da4e14a4bd05a4c_v001s.jpg",
  },
  {
    name: "IC 1004-1",
    velocity: "        4\n1.537 10  kilometers per second",
    distance: "227.12 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/797/7974cf1a098395e421b541cd8e2d7edc_v001s.jpg",
  },
  {
    name: "IC 1004-2",
    velocity: "        4\n1.537 10  kilometers per second",
    distance: "227.12 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c6b/c6ba3fbb62dc1aac9825119d58bc624e_v001s.jpg",
  },
  {
    name: "IC 1006",
    velocity: "      3\n5.1 10  kilometers per second",
    distance: "75.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/48b/48b32278fe108c16c75b071c366913ff_v001s.jpg",
  },
  {
    name: "IC 1007",
    velocity: "      3\n7.8 10  kilometers per second",
    distance: "115.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ae9/ae991b1267fcd70497a486929af78bcc_v001s.jpg",
  },
  {
    name: "IC 1008A",
    velocity: "       4\n1.23 10  kilometers per second",
    distance: "181.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/83d/83d4ee814fee1e6dac7fbc51593778ec_v001s.jpg",
  },
  {
    name: "IC 1008B",
    velocity: "       4\n1.23 10  kilometers per second",
    distance: "181.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c5a/c5a93f37a803fdc9b647ddf0895417c9_v001s.jpg",
  },
  {
    name: "IC 1009",
    velocity: "      3\n7.8 10  kilometers per second",
    distance: "114.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/8b2/8b2971b348090718412667f86311ffe4_v001s.jpg",
  },
  {
    name: "IC 101",
    velocity: "2404. kilometers per second",
    distance: "35.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/13f/13f69ce1f8d2142c9f46404d105c907f_v001s.jpg",
  },
  {
    name: "IC 1010",
    velocity: "      3\n7.7 10  kilometers per second",
    distance: "113.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/15a/15abfb75c9b70ec8dfc3b758c8c81e38_v001s.jpg",
  },
  {
    name: "IC 1011",
    velocity: "       3\n7.70 10  kilometers per second",
    distance: "113.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/398/3989c4057320adb09eeba0baf3242db2_v001s.jpg",
  },
  {
    name: "IC 1012",
    velocity: "      3\n4.1 10  kilometers per second",
    distance: "60.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9df/9df6cfe12c18b20b8849b84fc5fc383a_v001s.jpg",
  },
  {
    name: "IC 1013",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/db1/db152f689c731cdd2d25ad960a90986e_v001s.jpg",
  },
  {
    name: "IC 1014",
    velocity: "      3\n1.3 10  kilometers per second",
    distance: "28.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/57c/57ca9320217fb7dd169718bf86a37c0d_v001s.jpg",
  },
  {
    name: "IC 1015",
    velocity: "       4\n1.68 10  kilometers per second",
    distance: "248.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c0f/c0f60daeab2d498c69af99bea1848e7b_v001s.jpg",
  },
  {
    name: "IC 1017",
    velocity: "      3\n4.4 10  kilometers per second",
    distance: "64.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fa9/fa9e43ae6e2afcc328e0d0743470d1fa_v001s.jpg",
  },
  {
    name: "IC 1018",
    velocity: "      3\n4.1 10  kilometers per second",
    distance: "60.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a4d/a4d9ffe9e4a680494a40825b67f53f39_v001s.jpg",
  },
  {
    name: "IC 1019",
    velocity: "      3\n4.0 10  kilometers per second",
    distance: "59.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e80/e80747e5939138c5b2a7f45e1bcc5a8e_v001s.jpg",
  },
  {
    name: "IC 102",
    velocity: "        4\n1.442 10  kilometers per second",
    distance: "213.17 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ba6/ba6ac93af234c7cead291079059be607_v001s.jpg",
  },
  {
    name: "IC 1020",
    velocity: "      3\n4.3 10  kilometers per second",
    distance: "63.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2fd/2fd9841b54003850ea9c03cc482469f9_v001s.jpg",
  },
  {
    name: "IC 1021",
    velocity: "       3\n8.87 10  kilometers per second",
    distance: "131.07 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/82d/82dd1a507ed74a4d85bda551fa76af65_v001s.jpg",
  },
  {
    name: "IC 1022",
    velocity: "      3\n1.7 10  kilometers per second",
    distance: "37.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ccd/ccdbb15d8d5d3183e2daf912a344073e_v001s.jpg",
  },
  {
    name: "IC 1024",
    velocity: "      3\n1.4 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7b4/7b464ea097a098216c8b17448072dd5e_v001s.jpg",
  },
  {
    name: "IC 1025",
    velocity: "      3\n8.0 10  kilometers per second",
    distance: "118.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2b3/2b34fff7ae89b7da848530b14fa522ba_v001s.jpg",
  },
  {
    name: "IC 1027",
    velocity: "       4\n1.29 10  kilometers per second",
    distance: "191.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5e2/5e24123194bf9b0ebcd7ba8830e9675c_v001s.jpg",
  },
  {
    name: "IC 1028",
    velocity: "      3\n5.3 10  kilometers per second",
    distance: "78.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/28b/28b9572e601f2f51250e1bb1abd95a91_v001s.jpg",
  },
  {
    name: "IC 1029",
    velocity: "      3\n2.4 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/621/62139558d72dde79d173ebed88f07e8a_v001s.jpg",
  },
  {
    name: "IC 103",
    velocity: "9592. kilometers per second",
    distance: "141.77 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ee2/ee298f3700bba4072c07f2bf1dd0a632_v001s.jpg",
  },
  {
    name: "IC 1031",
    velocity: "       4\n1.09 10  kilometers per second",
    distance: "161.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/83d/83d67cf8b0261db2bca5aa18b91ff67d_v001s.jpg",
  },
  {
    name: "IC 1032",
    velocity: "       4\n1.09 10  kilometers per second",
    distance: "161.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/729/7294203bb8b9cbb73f9c366e97467812_v001s.jpg",
  },
  {
    name: "IC 1033",
    velocity: "      3\n8.1 10  kilometers per second",
    distance: "119.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/697/697a0e1ee1dba594f183cbbc484bd4d8_v001s.jpg",
  },
  {
    name: "IC 1034",
    velocity: "        4\n1.137 10  kilometers per second",
    distance: "168.06 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bce/bce930f3bfdb2a180a4139b9fe7f043d_v001s.jpg",
  },
  {
    name: "IC 1035",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "134.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ff0/ff0bd0cb18effeb81521662b20a76ae9_v001s.jpg",
  },
  {
    name: "IC 1036",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "134.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a11/a112ea151e38be3df754b07a41e18092_v001s.jpg",
  },
  {
    name: "IC 1037",
    velocity: "      3\n9.2 10  kilometers per second",
    distance: "135.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/af4/af4d3d219cbb86294c8d6f27e132a488_v001s.jpg",
  },
  {
    name: "IC 1038",
    velocity: "      3\n8.5 10  kilometers per second",
    distance: "126.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/8e0/8e0c87305655e74bcf0141e55265f8a6_v001s.jpg",
  },
  {
    name: "IC 1039",
    velocity: "      3\n7.4 10  kilometers per second",
    distance: "108.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7a0/7a0196817bef4d007fc36522af08f24b_v001s.jpg",
  },
  {
    name: "IC 1040",
    velocity: "      3\n8.5 10  kilometers per second",
    distance: "125.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/677/677ff192cdbbc26a3c3ef5a14fd7cf9a_v001s.jpg",
  },
  {
    name: "IC 1041",
    velocity: "      3\n7.9 10  kilometers per second",
    distance: "117.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/534/534ec2a299f9ed147b5cda89822358ba_v001s.jpg",
  },
  {
    name: "IC 1042",
    velocity: "      3\n8.0 10  kilometers per second",
    distance: "118.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2de/2de120d8c0c64624fdf34ee4aff62ca4_v001s.jpg",
  },
  {
    name: "IC 1043",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b2a/b2aa51fc19ea9e1620827aa1527f30cb_v001s.jpg",
  },
  {
    name: "IC 1044",
    velocity: "      3\n8.4 10  kilometers per second",
    distance: "124.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f8f/f8fde587a6dbf81ce43358a04c91aed8_v001s.jpg",
  },
  {
    name: "IC 1046",
    velocity: "      3\n7.9 10  kilometers per second",
    distance: "116.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/241/241c17c8571f518c448655e1ce436b88_v001s.jpg",
  },
  {
    name: "IC 1047",
    velocity: "       3\n9.20 10  kilometers per second",
    distance: "135.96 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/acd/acd6d14fc299fe278ff438619929d918_v001s.jpg",
  },
  {
    name: "IC 1048",
    velocity: "      3\n1.6 10  kilometers per second",
    distance: "33.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/310/310249a54335e80ba4a6cbb324eda688_v001s.jpg",
  },
  {
    name: "IC 1049",
    velocity: "      3\n6.7 10  kilometers per second",
    distance: "99.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/37f/37fad3df854ee3e318d03b23ee7c9b21_v001s.jpg",
  },
  {
    name: "IC 105",
    velocity: "9767. kilometers per second",
    distance: "144.35 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4d1/4d136f7855a6ad25748cda7f986d2bf4_v001s.jpg",
  },
  {
    name: "IC 1050",
    velocity: "      3\n9.6 10  kilometers per second",
    distance: "142.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/24e/24e85193d7e9dbfa66e7ac193f53ee9e_v001s.jpg",
  },
  {
    name: "IC 1051",
    velocity: "       4\n1.33 10  kilometers per second",
    distance: "196.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a57/a57dff701d59d9ca696083d7df8669b0_v001s.jpg",
  },
  {
    name: "IC 1052",
    velocity: "       3\n9.15 10  kilometers per second",
    distance: "135.26 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/755/755de224b7a724ff0307bc3396547aec_v001s.jpg",
  },
  {
    name: "IC 1053",
    velocity: "       4\n1.02 10  kilometers per second",
    distance: "150.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/8ae/8ae10ffe4c254ee09412d2c2bdaee41b_v001s.jpg",
  },
  {
    name: "IC 1054",
    velocity: "      3\n8.2 10  kilometers per second",
    distance: "121.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ac4/ac408f90aad89a44818a882c20dfc358_v001s.jpg",
  },
  {
    name: "IC 1055",
    velocity: "      3\n2.9 10  kilometers per second",
    distance: "40.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c8b/c8bb57792b3c1721cc765648f9b6a084_v001s.jpg",
  },
  {
    name: "IC 1056",
    velocity: "      3\n4.0 10  kilometers per second",
    distance: "59.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e27/e27c28f1554195da7fa3483926f7b8ff_v001s.jpg",
  },
  {
    name: "IC 1058",
    velocity: "       4\n1.12 10  kilometers per second",
    distance: "166.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6b4/6b421dfafd2d916b52ad88feaba6282c_v001s.jpg",
  },
  {
    name: "IC 1059",
    velocity: "      3\n8.0 10  kilometers per second",
    distance: "118.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/889/8895dbb0d6d8f8b48202e232c40ba1d7_v001s.jpg",
  },
  {
    name: "IC 1060",
    velocity: "      3\n4.6 10  kilometers per second",
    distance: "67.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/00c/00c003cacf4cacb29a28aa77f18f524b_v001s.jpg",
  },
  {
    name: "IC 1061",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6fd/6fd8b239d3b435a844256413d121e7bb_v001s.jpg",
  },
  {
    name: "IC 1062",
    velocity: "       4\n1.31 10  kilometers per second",
    distance: "193.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/eae/eaef990782130e70d233aa38e7d8f58d_v001s.jpg",
  },
  {
    name: "IC 1063",
    velocity: "       4\n1.34 10  kilometers per second",
    distance: "198.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d87/d8711bc16dfa9a32914278e5c6782ecf_v001s.jpg",
  },
  {
    name: "IC 1065",
    velocity: "       4\n1.25 10  kilometers per second",
    distance: "184.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/93c/93cd4621f341aa0851da420af255dc4f_v001s.jpg",
  },
  {
    name: "IC 1066",
    velocity: "      3\n1.6 10  kilometers per second",
    distance: "25.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6fc/6fc5bc25d7a41010b3efba73d03c7fdf_v001s.jpg",
  },
  {
    name: "IC 1067",
    velocity: "       3\n1.58 10  kilometers per second",
    distance: "25.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7eb/7eb4dae6724d737b610f11c9456f8cad_v001s.jpg",
  },
  {
    name: "IC 1068",
    velocity: "      3\n8.4 10  kilometers per second",
    distance: "124.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/151/1517fbe307b83499d187b0bf54a4ed92_v001s.jpg",
  },
  {
    name: "IC 1069",
    velocity: "       4\n1.13 10  kilometers per second",
    distance: "166.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c88/c884c4942dfbfc6dea750fbed893dc7b_v001s.jpg",
  },
  {
    name: "IC 107",
    velocity: "6356. kilometers per second",
    distance: "93.940 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3eb/3ebd40b5a23da55762a0c34fbc7200b9_v001s.jpg",
  },
  {
    name: "IC 1070",
    velocity: "      3\n6.8 10  kilometers per second",
    distance: "100.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/35f/35f269576920a63bb656a14bf3e4f7a0_v001s.jpg",
  },
  {
    name: "IC 1071",
    velocity: "      3\n8.3 10  kilometers per second",
    distance: "123.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f02/f028dafb17c9daceef52d22682768480_v001s.jpg",
  },
  {
    name: "IC 1072",
    velocity: "       4\n1.04 10  kilometers per second",
    distance: "153.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/eb8/eb8725c92b2665724045b8dd2344917f_v001s.jpg",
  },
  {
    name: "IC 1073",
    velocity: "      3\n8.3 10  kilometers per second",
    distance: "122.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/01c/01c614c0c299b30f23aa3e123c115345_v001s.jpg",
  },
  {
    name: "IC 1074",
    velocity: "      3\n7.8 10  kilometers per second",
    distance: "114.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/8d6/8d6bc8f58daa1531736285e9efcede27_v001s.jpg",
  },
  {
    name: "IC 1075",
    velocity: "      3\n6.1 10  kilometers per second",
    distance: "90.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/808/8086c40d1c4f5d86cc2f3d74323abba9_v001s.jpg",
  },
  {
    name: "IC 1076",
    velocity: "      3\n6.1 10  kilometers per second",
    distance: "90.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/212/212f594e979c2f7a370c187cd34d98d7_v001s.jpg",
  },
  {
    name: "IC 1077",
    velocity: "      3\n3.4 10  kilometers per second",
    distance: "50.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4ac/4ac6217a334c8a91daa4366b29fe678a_v001s.jpg",
  },
  {
    name: "IC 1078",
    velocity: "      3\n8.6 10  kilometers per second",
    distance: "126.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e08/e08337ef4e233c582d27cdc2144482f8_v001s.jpg",
  },
  {
    name: "IC 1079",
    velocity: "      3\n8.7 10  kilometers per second",
    distance: "128.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/452/452bd568b5784f5ae2dc70da653a013c_v001s.jpg",
  },
  {
    name: "IC 108",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/cb4/cb4904aa9a7030de7059980f61a1f68d_v001s.jpg",
  },
  {
    name: "IC 1080",
    velocity: "      4\n1.0 10  kilometers per second",
    distance: "147.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/378/378c1bae2aec83860743ea8d435ef0f0_v001s.jpg",
  },
  {
    name: "IC 1081",
    velocity: "      3\n3.2 10  kilometers per second",
    distance: "48. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4ae/4ae75380fc8c3e8f911700eb0eb8865d_v001s.jpg",
  },
  {
    name: "IC 1082",
    velocity: "       4\n1.11 10  kilometers per second",
    distance: "163.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e06/e0696f8a2af5a41f043cb4d4441beb91_v001s.jpg",
  },
  {
    name: "IC 1083",
    velocity: "      3\n8.8 10  kilometers per second",
    distance: "130.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/354/3541bc89ce1dbfeb74a5108b520af1e2_v001s.jpg",
  },
  {
    name: "IC 1084",
    velocity: "      3\n2.2 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e46/e46b6d4e6438d8c1c2cff73f89591b9f_v001s.jpg",
  },
  {
    name: "IC 1085",
    velocity: "       4\n1.14 10  kilometers per second",
    distance: "168.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4ea/4eae70acac7f941caa7a0c7521069f25_v001s.jpg",
  },
  {
    name: "IC 1086",
    velocity: "      3\n6.3 10  kilometers per second",
    distance: "93.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9e0/9e069a704e3306f7d15a32961b918ff1_v001s.jpg",
  },
  {
    name: "IC 1087",
    velocity: "       4\n1.05 10  kilometers per second",
    distance: "155.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e63/e63188977914404737d7fa45003f48aa_v001s.jpg",
  },
  {
    name: "IC 1089",
    velocity: "      3\n9.3 10  kilometers per second",
    distance: "137.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/092/092136be3daee133299eeca5629b72c4_v001s.jpg",
  },
  {
    name: "IC 109",
    velocity: "9715. kilometers per second",
    distance: "143.59 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/188/1883236b0cdb463880bc871d3f0fc763_v001s.jpg",
  },
  {
    name: "IC 1091",
    velocity: "      3\n5.0 10  kilometers per second",
    distance: "73.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d32/d322b2dd470487422f783c292de3782f_v001s.jpg",
  },
  {
    name: "IC 1092",
    velocity: "6435. kilometers per second",
    distance: "95.108 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c28/c28a542ae8c16ecf4d991a78a7f3aad9_v001s.jpg",
  },
  {
    name: "IC 1093",
    velocity: "       4\n1.34 10  kilometers per second",
    distance: "197.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2e9/2e97997dbe37fe756643823bbd6e86f2_v001s.jpg",
  },
  {
    name: "IC 1094-1",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/26a/26a053ee9e49c605cde595650090294d_v001s.jpg",
  },
  {
    name: "IC 1094-2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3da/3da978c5d96eefd8286f96530109c6ab_v001s.jpg",
  },
  {
    name: "IC 1094-3",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ce5/ce58e0c1a51eb975b308e7c82b6fb29d_v001s.jpg",
  },
  {
    name: "IC 1095-1",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/091/0915b5c79c2f0c8b0f1a3d304b7fbe8c_v001s.jpg",
  },
  {
    name: "IC 1095-2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d97/d97564ac1c6e3746b30ecc7d6ec61a37_v001s.jpg",
  },
  {
    name: "IC 1096",
    velocity: "      3\n6.4 10  kilometers per second",
    distance: "94.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1f7/1f723d62d0b0cd85e77909e481dde0ff_v001s.jpg",
  },
  {
    name: "IC 1097",
    velocity: "       3\n6.12 10  kilometers per second",
    distance: "90.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/94e/94e6c28337bf7579587be9090466f94d_v001s.jpg",
  },
  {
    name: "IC 1099",
    velocity: "      3\n8.9 10  kilometers per second",
    distance: "131.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a84/a84201837c92fa7433581941e73a8469_v001s.jpg",
  },
  {
    name: "IC 1101",
    velocity: "       4\n2.33 10  kilometers per second",
    distance: "344.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/199/19948bb511c00a660c10de54f36d1315_v001s.jpg",
  },
  {
    name: "IC 1102",
    velocity: "       4\n1.26 10  kilometers per second",
    distance: "186.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/951/9517f54375f9b70aa6cb6b36be4692ce_v001s.jpg",
  },
  {
    name: "IC 1103",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/aec/aec5933a2e279dc7f7c91fcaaad77751_v001s.jpg",
  },
  {
    name: "IC 1105",
    velocity: "       4\n1.10 10  kilometers per second",
    distance: "162.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/85c/85c4719c22819242bcf0bfbe5b1edafa_v001s.jpg",
  },
  {
    name: "IC 1106",
    velocity: "       4\n1.25 10  kilometers per second",
    distance: "184.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5a5/5a50a5144d5489e6a9ee2b0fa8cb62bb_v001s.jpg",
  },
  {
    name: "IC 1107",
    velocity: "       4\n1.23 10  kilometers per second",
    distance: "182.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/103/1030266b8bc6a88ced7b8b22424b6949_v001s.jpg",
  },
  {
    name: "IC 1109",
    velocity: "       4\n1.53 10  kilometers per second",
    distance: "226.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e04/e048eddfaffacd8a8f99566d09746470_v001s.jpg",
  },
  {
    name: "IC 1110",
    velocity: "      3\n3.4 10  kilometers per second",
    distance: "49.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4cb/4cb030315347ea856022438ca24059a3_v001s.jpg",
  },
  {
    name: "IC 1112",
    velocity: "       4\n1.01 10  kilometers per second",
    distance: "149.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/57a/57a664c411064dbe8304c21f9536a776_v001s.jpg",
  },
  {
    name: "IC 1113",
    velocity: "       4\n1.07 10  kilometers per second",
    distance: "157.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f4c/f4ceff61bb9ec7f0b4c0c313c9148b25_v001s.jpg",
  },
  {
    name: "IC 1116",
    velocity: "       4\n1.17 10  kilometers per second",
    distance: "173.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/170/17002960e56d66fce7c2421a78533d4c_v001s.jpg",
  },
  {
    name: "IC 1117",
    velocity: "       3\n6.99 10  kilometers per second",
    distance: "103.38 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3df/3df84dd98c54918a149ea8dc3ff80257_v001s.jpg",
  },
  {
    name: "IC 1118",
    velocity: "      3\n6.7 10  kilometers per second",
    distance: "99.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d5c/d5c056c7e659a841e19bdb5520ea29ec_v001s.jpg",
  },
  {
    name: "IC 1119-1",
    velocity: "      3\n9.7 10  kilometers per second",
    distance: "144. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c74/c741369162a94c3dfc9a5581a26a50dc_v001s.jpg",
  },
  {
    name: "IC 1119-2",
    velocity: "      3\n9.7 10  kilometers per second",
    distance: "144. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c9b/c9b7d33c7e895b3b07ce48d9e3ef84ea_v001s.jpg",
  },
  {
    name: "IC 112",
    velocity: "5810. kilometers per second",
    distance: "85.871 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7e9/7e91c8487fd764626bbb42715dfdc545_v001s.jpg",
  },
  {
    name: "IC 1120-1",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/457/45748d4e7d0ad6e8e1363bc4cb8076d4_v001s.jpg",
  },
  {
    name: "IC 1120-2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bfb/bfbbb7f306345c9d6127ef2609b0bbf8_v001s.jpg",
  },
  {
    name: "IC 1121",
    velocity: "       4\n1.30 10  kilometers per second",
    distance: "192.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e89/e890106244f70700dc41d0a2ef85908d_v001s.jpg",
  },
  {
    name: "IC 1122",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4e8/4e8e76a85ec0b454c0cf4b656264af76_v001s.jpg",
  },
  {
    name: "IC 1124",
    velocity: "      3\n5.3 10  kilometers per second",
    distance: "78.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/10b/10b58c538b76a9b525a378e7fcbbc1a2_v001s.jpg",
  },
  {
    name: "IC 1125",
    velocity: "      3\n2.8 10  kilometers per second",
    distance: "30.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d77/d77005b68e0cb6dd281c22a80cc85e9d_v001s.jpg",
  },
  {
    name: "IC 1127",
    velocity: "      3\n5.4 10  kilometers per second",
    distance: "80.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/778/778baa23a0a19dd5e2feea7b58558adb_v001s.jpg",
  },
  {
    name: "IC 1128",
    velocity: "      3\n3.4 10  kilometers per second",
    distance: "50.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/99b/99b3d61739cb3396244ff8c44c9bc5c4_v001s.jpg",
  },
  {
    name: "IC 1129",
    velocity: "      3\n6.5 10  kilometers per second",
    distance: "96.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/228/2280e735db1f894860b257443bc74df1_v001s.jpg",
  },
  {
    name: "IC 113",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/cf4/cf44979ac548182fb09a49520cfea2c2_v001s.jpg",
  },
  {
    name: "IC 1130",
    velocity: "       4\n1.36 10  kilometers per second",
    distance: "201.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/45a/45aa3147db66b67dd38314e0a8011226_v001s.jpg",
  },
  {
    name: "IC 1131",
    velocity: "      3\n2.0 10  kilometers per second",
    distance: "32.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7fb/7fb95861d55cfc313d5272195c716293_v001s.jpg",
  },
  {
    name: "IC 1132",
    velocity: "      3\n4.5 10  kilometers per second",
    distance: "66.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9f6/9f63aa0dc47cae404afd952d1a53ed39_v001s.jpg",
  },
  {
    name: "IC 1133",
    velocity: "       3\n4.05 10  kilometers per second",
    distance: "59.92 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/de8/de8394e331e7aba21d54bd103147cfda_v001s.jpg",
  },
  {
    name: "IC 1134-1",
    velocity: "       4\n1.48 10  kilometers per second",
    distance: "219.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d89/d898f1fa9e52447225803dac1d09f9e4_v001s.jpg",
  },
  {
    name: "IC 1134-2",
    velocity: "       4\n1.48 10  kilometers per second",
    distance: "219.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/953/9538679b7e6d3014cd1ed005373ab613_v001s.jpg",
  },
  {
    name: "IC 1135",
    velocity: "      3\n3.1 10  kilometers per second",
    distance: "45.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/649/64989532fef391a9335a3798e8d30a58_v001s.jpg",
  },
  {
    name: "IC 1136",
    velocity: "      3\n9.0 10  kilometers per second",
    distance: "132.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/427/427ef4e3374f46c01f3260ef1c803ae6_v001s.jpg",
  },
  {
    name: "IC 1137",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "59.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3fe/3fe9dd5f195db62ac20d576fef8b9c88_v001s.jpg",
  },
  {
    name: "IC 1138",
    velocity: "      3\n6.9 10  kilometers per second",
    distance: "102.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6e6/6e6f63fc750080a37e237546f3ee9b1c_v001s.jpg",
  },
  {
    name: "IC 1139",
    velocity: "     3\n7. 10  kilometers per second",
    distance: "98. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4c6/4c6e411a03525e8452f61fece143dc4d_v001s.jpg",
  },
  {
    name: "IC 114",
    velocity: "2275. kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/11b/11bf3852ed3f5f9ec4cab57a51ed49da_v001s.jpg",
  },
  {
    name: "IC 1141",
    velocity: "      3\n4.4 10  kilometers per second",
    distance: "64.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/244/24463e72c851d95f9f9353e41337b0ba_v001s.jpg",
  },
  {
    name: "IC 1142",
    velocity: "       4\n1.40 10  kilometers per second",
    distance: "206.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d22/d228f6a5190715dd83af174f8b0fd3d3_v001s.jpg",
  },
  {
    name: "IC 1143",
    velocity: "      3\n6.5 10  kilometers per second",
    distance: "96. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/aa5/aa5b9f7f7b9da2b060d4b5668d6b67d7_v001s.jpg",
  },
  {
    name: "IC 1144",
    velocity: "       4\n1.21 10  kilometers per second",
    distance: "178.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/151/151eb18a33caaa43ba676f17f19a0d08_v001s.jpg",
  },
  {
    name: "IC 1145",
    velocity: "      3\n7.6 10  kilometers per second",
    distance: "111.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/73e/73e2b162bb7f1c49d40c2dce0597ad0f_v001s.jpg",
  },
  {
    name: "IC 1146",
    velocity: "      3\n7.9 10  kilometers per second",
    distance: "116.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6b4/6b415d3f1bc9bc39aab33693f127c162_v001s.jpg",
  },
  {
    name: "IC 1147",
    velocity: "       4\n1.05 10  kilometers per second",
    distance: "154.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d63/d630d8144a3fc8ee9a86f069db330b41_v001s.jpg",
  },
  {
    name: "IC 1149",
    velocity: "      3\n4.7 10  kilometers per second",
    distance: "69.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/729/729511fcea7fa12e8bf124ad6c0b1ae0_v001s.jpg",
  },
  {
    name: "IC 115",
    velocity: "        4\n1.280 10  kilometers per second",
    distance: "189.12 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d82/d8220e7fd4471c05a46aa116a710e8fd_v001s.jpg",
  },
  {
    name: "IC 1151",
    velocity: "      3\n2.2 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b38/b389e81e94b2b560cd55ad57b32dd3a7_v001s.jpg",
  },
  {
    name: "IC 1152",
    velocity: "      3\n5.9 10  kilometers per second",
    distance: "86.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a2d/a2d853778a53cb12b8706be2adebfea2_v001s.jpg",
  },
  {
    name: "IC 1153",
    velocity: "      3\n5.9 10  kilometers per second",
    distance: "18.00 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b64/b643dd974d484ff1c72acf6b8cc7cade_v001s.jpg",
  },
  {
    name: "IC 1154",
    velocity: "       4\n1.14 10  kilometers per second",
    distance: "168.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/43d/43dd9ead373fccb656e67d91bf7f905f_v001s.jpg",
  },
  {
    name: "IC 1155",
    velocity: "        4\n1.070 10  kilometers per second",
    distance: "158.14 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b95/b9572390fbe2b009b7db59d3bd698a8a_v001s.jpg",
  },
  {
    name: "IC 1156",
    velocity: "      3\n9.4 10  kilometers per second",
    distance: "138.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/66b/66bbe868286c840d34f292b665712c46_v001s.jpg",
  },
  {
    name: "IC 1157",
    velocity: "        4\n1.155 10  kilometers per second",
    distance: "170.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fa8/fa84e55612f0838c60796b3c56f55784_v001s.jpg",
  },
  {
    name: "IC 1158",
    velocity: "       3\n1.93 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/511/5115c3c14b8e9d6fdacbc5db6ef66b47_v001s.jpg",
  },
  {
    name: "IC 1159",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/779/7796a125cc3bbbe22a03b6a6913cf2e2_v001s.jpg",
  },
  {
    name: "IC 116",
    velocity: "5519. kilometers per second",
    distance: "81.570 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/46c/46c2e7e5aca89f011195a2f5954b04c8_v001s.jpg",
  },
  {
    name: "IC 1160",
    velocity: "      4\n1.1 10  kilometers per second",
    distance: "162. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/565/565862b61b9a60852ac3eba7ec2515ba_v001s.jpg",
  },
  {
    name: "IC 1161",
    velocity: "       4\n1.10 10  kilometers per second",
    distance: "162.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2bd/2bd043996d4f0fba677a7e873668675d_v001s.jpg",
  },
  {
    name: "IC 1162",
    velocity: "       4\n1.33 10  kilometers per second",
    distance: "196.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c38/c38c27faedca61cb76286464cb3af867_v001s.jpg",
  },
  {
    name: "IC 1163",
    velocity: "       4\n1.06 10  kilometers per second",
    distance: "156.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/94b/94ba0681693778b204c119b5425e8ce5_v001s.jpg",
  },
  {
    name: "IC 1165",
    velocity: "       4\n1.16 10  kilometers per second",
    distance: "171.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/443/4436ec1dd02e3d3e12ac3fcb1ba20948_v001s.jpg",
  },
  {
    name: "IC 1165B",
    velocity: "       4\n1.16 10  kilometers per second",
    distance: "171.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/48d/48dfad02c767b2f5b2d477d95faac65c_v001s.jpg",
  },
  {
    name: "IC 1166-1",
    velocity: "      4\n2.2 10  kilometers per second",
    distance: "321. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/82a/82a2f894ab81faea95dc796a93a05ed4_v001s.jpg",
  },
  {
    name: "IC 1166-2",
    velocity: "      4\n2.2 10  kilometers per second",
    distance: "321. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/503/5031393bf64f966a1ad48f615497a0bf_v001s.jpg",
  },
  {
    name: "IC 1167",
    velocity: "        4\n1.083 10  kilometers per second",
    distance: "160.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1cb/1cbced7788c3e9e25b69a8e4689383e0_v001s.jpg",
  },
  {
    name: "IC 1168",
    velocity: "      4\n1.1 10  kilometers per second",
    distance: "160. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e23/e236ef4acdbdd3f542ce1d5f98d24797_v001s.jpg",
  },
  {
    name: "IC 1168B",
    velocity: "      4\n1.1 10  kilometers per second",
    distance: "160. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fb4/fb45955add2b9eef37c2f32da57b954c_v001s.jpg",
  },
  {
    name: "IC 1169",
    velocity: "      3\n3.4 10  kilometers per second",
    distance: "49.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/dec/dec5291d37c86c2c35b5d738920b2761_v001s.jpg",
  },
  {
    name: "IC 1170",
    velocity: "      3\n9.6 10  kilometers per second",
    distance: "142.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/426/426bc0b541bd26dd1fcf61309aaa2e26_v001s.jpg",
  },
  {
    name: "IC 1173",
    velocity: "       4\n1.05 10  kilometers per second",
    distance: "154.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/629/6295fc8535d7f1380e60b7bca4d0121a_v001s.jpg",
  },
  {
    name: "IC 1174",
    velocity: "      3\n4.7 10  kilometers per second",
    distance: "69.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/173/173082d079946e6b11954a9f1c57b947_v001s.jpg",
  },
  {
    name: "IC 1177",
    velocity: "       4\n1.16 10  kilometers per second",
    distance: "171.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/75e/75e5f430c990bc74745c0efff9828b16_v001s.jpg",
  },
  {
    name: "IC 1178",
    velocity: "       4\n1.02 10  kilometers per second",
    distance: "150.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/657/6576bb4d1312110faaddc6fab7bc7cc9_v001s.jpg",
  },
  {
    name: "IC 118",
    velocity: "        4\n1.397 10  kilometers per second",
    distance: "206.47 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ebd/ebd99febec3a827edc09b1dc06dc437b_v001s.jpg",
  },
  {
    name: "IC 1181",
    velocity: "       4\n1.03 10  kilometers per second",
    distance: "151.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6d0/6d0905397b53c3798ef42e590caca9ca_v001s.jpg",
  },
  {
    name: "IC 1182",
    velocity: "       4\n1.03 10  kilometers per second",
    distance: "151.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/8c0/8c08ab29886cad0b29f96b05d569d44a_v001s.jpg",
  },
  {
    name: "IC 1185",
    velocity: "       4\n1.04 10  kilometers per second",
    distance: "154.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/dc9/dc992b4bf07689bec77eefadf890d3dd_v001s.jpg",
  },
  {
    name: "IC 1186",
    velocity: "       4\n1.05 10  kilometers per second",
    distance: "154.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4d1/4d1fde7fd16324109d11fb69da56c872_v001s.jpg",
  },
  {
    name: "IC 1187",
    velocity: "      3\n7.6 10  kilometers per second",
    distance: "112.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f3b/f3be99b5302c1fd5046c78e9b3de84b0_v001s.jpg",
  },
  {
    name: "IC 1188",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/435/4357c24326371484d34e78b72db4b72d_v001s.jpg",
  },
  {
    name: "IC 1189",
    velocity: "       4\n1.18 10  kilometers per second",
    distance: "174.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/596/596112cd79c9d75aae64093177df6840_v001s.jpg",
  },
  {
    name: "IC 119",
    velocity: "5712. kilometers per second",
    distance: "84.422 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/534/5343f543332022d4b551d435660c9b64_v001s.jpg",
  },
  {
    name: "IC 1190",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "179. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/11a/11a1b67675b68a87e12949f310d1ee52_v001s.jpg",
  },
  {
    name: "IC 1191",
    velocity: "       4\n1.16 10  kilometers per second",
    distance: "172.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/42f/42f24cf6c5e1a77cd6da4c0961947644_v001s.jpg",
  },
  {
    name: "IC 1192",
    velocity: "       4\n1.13 10  kilometers per second",
    distance: "167.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/45c/45c823379e12c6f278875d6c04b98a41_v001s.jpg",
  },
  {
    name: "IC 1193",
    velocity: "       4\n1.21 10  kilometers per second",
    distance: "178.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5d4/5d41676406acb466e52e272334d0edac_v001s.jpg",
  },
  {
    name: "IC 1194",
    velocity: "       4\n1.17 10  kilometers per second",
    distance: "172.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7eb/7ebf6839b2c2cea5bb8364700ec8f541_v001s.jpg",
  },
  {
    name: "IC 1195",
    velocity: "       4\n1.20 10  kilometers per second",
    distance: "176.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7a7/7a7fe2baffaa779469307416bca6c17d_v001s.jpg",
  },
  {
    name: "IC 1196",
    velocity: "      3\n4.9 10  kilometers per second",
    distance: "72.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f00/f00ad251c654ab53ed7ade51ff768d58_v001s.jpg",
  },
  {
    name: "IC 1197",
    velocity: "       3\n1.37 10  kilometers per second",
    distance: "22.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4da/4da8dca984258d013a1db0ebc3a3dd14_v001s.jpg",
  },
  {
    name: "IC 1198",
    velocity: "       4\n1.01 10  kilometers per second",
    distance: "148.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3c7/3c78dd5a71aa3029ad679f72e1834537_v001s.jpg",
  },
  {
    name: "IC 1199",
    velocity: "      3\n4.7 10  kilometers per second",
    distance: "69.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/aec/aecf5ecdad0104b78c67e331417dfa24_v001s.jpg",
  },
  {
    name: "IC 12",
    velocity: "6067. kilometers per second",
    distance: "89.669 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/424/424ab26c8fdb55f06ce1a4727f4acd2e_v001s.jpg",
  },
  {
    name: "IC 120",
    velocity: "4806. kilometers per second",
    distance: "71.032 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/778/7781643b90743bbd7245d0a47b5398dc_v001s.jpg",
  },
  {
    name: "IC 1201",
    velocity: "      3\n7.1 10  kilometers per second",
    distance: "104.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bec/bec20424456e8b77ec7f837342548699_v001s.jpg",
  },
  {
    name: "IC 1204",
    velocity: "7538. kilometers per second",
    distance: "111.41 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7b1/7b11d07e0791c858345290621f7abcc1_v001s.jpg",
  },
  {
    name: "IC 1205",
    velocity: "      3\n3.2 10  kilometers per second",
    distance: "48.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a44/a44afbc22d40b1e87461fce702ec8cac_v001s.jpg",
  },
  {
    name: "IC 1206",
    velocity: "       4\n1.01 10  kilometers per second",
    distance: "149.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/319/319079ac5ac3ee33f205059f015d3de0_v001s.jpg",
  },
  {
    name: "IC 1208",
    velocity: "      3\n9.7 10  kilometers per second",
    distance: "142.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/016/0168a91ee18b26f8a2d3aa0a8a597bcf_v001s.jpg",
  },
  {
    name: "IC 1209",
    velocity: "      3\n8.9 10  kilometers per second",
    distance: "132.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/27f/27f6910871b0840dfc5e3877344f2b10_v001s.jpg",
  },
  {
    name: "IC 121",
    velocity: "9024. kilometers per second",
    distance: "133.37 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5ff/5ffc1b57e98e9412c62f2ca0825d98a8_v001s.jpg",
  },
  {
    name: "IC 1210",
    velocity: "      3\n2.9 10  kilometers per second",
    distance: "49.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/34c/34c43387ee6a23907bc5fa40a707d024_v001s.jpg",
  },
  {
    name: "IC 1211",
    velocity: "      3\n5.6 10  kilometers per second",
    distance: "83.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bbb/bbbec35386feca68472920cc3988add6_v001s.jpg",
  },
  {
    name: "IC 1212",
    velocity: "      3\n9.7 10  kilometers per second",
    distance: "143.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5f4/5f406f68d5bbdef37eef3b93287711b2_v001s.jpg",
  },
  {
    name: "IC 1214",
    velocity: "      3\n7.0 10  kilometers per second",
    distance: "103.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f4c/f4c04050e33348e42076bbe32e174e73_v001s.jpg",
  },
  {
    name: "IC 1215",
    velocity: "      3\n7.5 10  kilometers per second",
    distance: "110.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/966/96679ea0091e05f89778989872102758_v001s.jpg",
  },
  {
    name: "IC 1216",
    velocity: "     3\n8. 10  kilometers per second",
    distance: "113. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4d7/4d74fb79daa1b723051ff62e30d59e08_v001s.jpg",
  },
  {
    name: "IC 1218",
    velocity: "      3\n1.1 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/19b/19bdc3a44b5d26f880c050b4cbe45673_v001s.jpg",
  },
  {
    name: "IC 1219",
    velocity: "       4\n1.04 10  kilometers per second",
    distance: "154.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/658/6581a28e8a2b2cef497254cd2610d367_v001s.jpg",
  },
  {
    name: "IC 122",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d37/d37f40c1795b0536b3f88d88677dba40_v001s.jpg",
  },
  {
    name: "IC 1220",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/12a/12a6dfdda88f684391e0251a05b08882_v001s.jpg",
  },
  {
    name: "IC 1221",
    velocity: "      3\n5.5 10  kilometers per second",
    distance: "81.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/632/6320c3a1d4fc2d2d51fd767e29828457_v001s.jpg",
  },
  {
    name: "IC 1222",
    velocity: "      3\n9.2 10  kilometers per second",
    distance: "136.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c71/c71c02f76357f3bde8a50f5f2755158d_v001s.jpg",
  },
  {
    name: "IC 1223",
    velocity: "      3\n8.9 10  kilometers per second",
    distance: "131.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/63c/63c23696ac319bf118d82d4625a8b971_v001s.jpg",
  },
  {
    name: "IC 1224",
    velocity: "       4\n1.02 10  kilometers per second",
    distance: "150.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1e5/1e5b355fff68fb7dc5175ed06e38c0da_v001s.jpg",
  },
  {
    name: "IC 1225",
    velocity: "      3\n8.8 10  kilometers per second",
    distance: "129.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/648/6488f5c4d0a366478279d42861580d22_v001s.jpg",
  },
  {
    name: "IC 1226",
    velocity: "      3\n5.3 10  kilometers per second",
    distance: "78.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2b1/2b1dfca420f35428edfd242823f83354_v001s.jpg",
  },
  {
    name: "IC 1228",
    velocity: "      3\n7.6 10  kilometers per second",
    distance: "112.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b47/b4700313087b2a87456d30ff4ff7ac3f_v001s.jpg",
  },
  {
    name: "IC 1229",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/dd4/dd4122edd05917cf3ccf5ad4f89df94c_v001s.jpg",
  },
  {
    name: "IC 123",
    velocity: "9179. kilometers per second",
    distance: "135.66 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0b2/0b2bf6f3419b24afcb09f678b7d16837_v001s.jpg",
  },
  {
    name: "IC 1230",
    velocity: "       4\n1.44 10  kilometers per second",
    distance: "213.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a50/a5057adde0733aa4715da14f3ba1f6a1_v001s.jpg",
  },
  {
    name: "IC 1231",
    velocity: "       3\n5.25 10  kilometers per second",
    distance: "77.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c83/c8388608bc08a9c802c22a9b9484f0cc_v001s.jpg",
  },
  {
    name: "IC 1235",
    velocity: "      3\n3.1 10  kilometers per second",
    distance: "46.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/766/7661f07f6cf0d4d16259b91006f09a8b_v001s.jpg",
  },
  {
    name: "IC 1236",
    velocity: "      3\n6.0 10  kilometers per second",
    distance: "89.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2d0/2d0ddb4bbec88652303c54a578a369cb_v001s.jpg",
  },
  {
    name: "IC 1237",
    velocity: "      3\n8.6 10  kilometers per second",
    distance: "127.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/672/672ab2dc5d0380c8f4fdbe04ca8c86a2_v001s.jpg",
  },
  {
    name: "IC 1241",
    velocity: "      3\n4.8 10  kilometers per second",
    distance: "71.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5c7/5c71f41b6889dd4739a359d8ada4ae90_v001s.jpg",
  },
  {
    name: "IC 1242",
    velocity: "      3\n6.7 10  kilometers per second",
    distance: "99.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/730/730548055439c89554a8cbd14aeeac76_v001s.jpg",
  },
  {
    name: "IC 1244",
    velocity: "      3\n8.2 10  kilometers per second",
    distance: "120.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/445/445d9fdce0bd23b0146ef85ce9a9e31f_v001s.jpg",
  },
  {
    name: "IC 1245",
    velocity: "       4\n1.12 10  kilometers per second",
    distance: "165.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6f5/6f5a89db2e1a367f2f858560f853d329_v001s.jpg",
  },
  {
    name: "IC 1248",
    velocity: "      3\n5.0 10  kilometers per second",
    distance: "74.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f5c/f5c4e18f4e5c47eef372601688b1ffe3_v001s.jpg",
  },
  {
    name: "IC 1249",
    velocity: "       4\n1.12 10  kilometers per second",
    distance: "165.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0b5/0b56b13919810288ff8f7099e252a1ce_v001s.jpg",
  },
  {
    name: "IC 125",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6a7/6a7b8fba82d2913025c80d6e83fef9b1_v001s.jpg",
  },
  {
    name: "IC 1250",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/414/4144ca304dd93ae759dacea02b973ef0_v001s.jpg",
  },
  {
    name: "IC 1251",
    velocity: "      3\n1.2 10  kilometers per second",
    distance: "51.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0b7/0b701c918879f659a30224dae462c9e8_v001s.jpg",
  },
  {
    name: "IC 1252",
    velocity: "      3\n9.0 10  kilometers per second",
    distance: "133. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1e2/1e223435e2460e9cfb850563bbfe4af3_v001s.jpg",
  },
  {
    name: "IC 1254",
    velocity: "      3\n1.2 10  kilometers per second",
    distance: "23.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/480/480b5c4c25aef5c0ce45af9dbd125792_v001s.jpg",
  },
  {
    name: "IC 1255",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "134.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d59/d59e5bafa07bc44e7dabfff826aaa2f0_v001s.jpg",
  },
  {
    name: "IC 1256",
    velocity: "       3\n4.73 10  kilometers per second",
    distance: "69.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/8b8/8b8ba7a4439ba7152539461b5a263a10_v001s.jpg",
  },
  {
    name: "IC 1258",
    velocity: "      3\n8.1 10  kilometers per second",
    distance: "120.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/def/defe9d037987612d2cbb175cb553666e_v001s.jpg",
  },
  {
    name: "IC 1259-1",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "119. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/343/3430e3baf4fa3e179bdd99e5c5677430_v001s.jpg",
  },
  {
    name: "IC 1259-2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9b8/9b8671fe3259ca3c3ab442ad86f1d9f9_v001s.jpg",
  },
  {
    name: "IC 126",
    velocity: "5712. kilometers per second",
    distance: "82.30 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/627/6278335595d65e276a85214ca211664e_v001s.jpg",
  },
  {
    name: "IC 1260",
    velocity: "      3\n7.9 10  kilometers per second",
    distance: "116.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3bd/3bd82ddc45d839ee2951a08daaf00f9f_v001s.jpg",
  },
  {
    name: "IC 1261-1",
    velocity: "       4\n1.39 10  kilometers per second",
    distance: "205.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/965/965f2a6dc065d8c63c47d4658cf20f2d_v001s.jpg",
  },
  {
    name: "IC 1261-2",
    velocity: "       4\n1.39 10  kilometers per second",
    distance: "205.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a39/a39761699e5e422149f6648c6b3b1657_v001s.jpg",
  },
  {
    name: "IC 1262",
    velocity: "      3\n9.8 10  kilometers per second",
    distance: "144.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9b8/9b8c2f7d0a938f984e0dd65f72b4a08e_v001s.jpg",
  },
  {
    name: "IC 1263",
    velocity: "      3\n8.7 10  kilometers per second",
    distance: "128.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1f7/1f725d9ea68b77110c762cfc3bfb5850_v001s.jpg",
  },
  {
    name: "IC 1264",
    velocity: "      3\n9.9 10  kilometers per second",
    distance: "146.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6b7/6b7ea6fabd3b32ae4bd466d1141c1630_v001s.jpg",
  },
  {
    name: "IC 1265",
    velocity: "      3\n2.2 10  kilometers per second",
    distance: "41.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/834/834607d318f248526f3da1798a7b2c67_v001s.jpg",
  },
  {
    name: "IC 1267",
    velocity: "      3\n9.3 10  kilometers per second",
    distance: "137.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/edb/edba7b7c2f5ad893aa438bb4823fbf7d_v001s.jpg",
  },
  {
    name: "IC 1268",
    velocity: "      3\n6.3 10  kilometers per second",
    distance: "92.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/671/671c11a266a4b19d4220f445e309b0f5_v001s.jpg",
  },
  {
    name: "IC 1269",
    velocity: "       3\n6.11 10  kilometers per second",
    distance: "90.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c0b/c0b056fc5cd4b405980d32c56c820917_v001s.jpg",
  },
  {
    name: "IC 127",
    velocity: "1995. kilometers per second",
    distance: "27.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e88/e8882c27b6dc07f6071f30c5ea98843e_v001s.jpg",
  },
  {
    name: "IC 1277",
    velocity: "      3\n7.7 10  kilometers per second",
    distance: "114.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c22/c228a239ca90e34284503565d6c9ef59_v001s.jpg",
  },
  {
    name: "IC 1279",
    velocity: "      3\n6.5 10  kilometers per second",
    distance: "95.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ee6/ee679445e43230bff5649c9b12fd1601_v001s.jpg",
  },
  {
    name: "IC 128",
    velocity: "5268. kilometers per second",
    distance: "77.860 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/947/9476cbf75221876399f37101da213c8b_v001s.jpg",
  },
  {
    name: "IC 1281",
    velocity: "       4\n1.36 10  kilometers per second",
    distance: "200.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f82/f823db531aa9f25f5ce92c5b266a5b98_v001s.jpg",
  },
  {
    name: "IC 1286",
    velocity: "      3\n5.6 10  kilometers per second",
    distance: "82.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9c4/9c456eb20e2c83d2dd2192eebe4a3e03_v001s.jpg",
  },
  {
    name: "IC 1288",
    velocity: "      3\n5.7 10  kilometers per second",
    distance: "84.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0e8/0e81d64b080a8278364083713dec3ec3_v001s.jpg",
  },
  {
    name: "IC 1289",
    velocity: "      3\n5.5 10  kilometers per second",
    distance: "81.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1b8/1b85c439fb7a1be2b56a806a9a5e2681_v001s.jpg",
  },
  {
    name: "IC 129",
    velocity: "5299. kilometers per second",
    distance: "78.318 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2e8/2e8ebae9e4d2e81feb1ef8d62489698f_v001s.jpg",
  },
  {
    name: "IC 1291",
    velocity: "      3\n2.0 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/daa/daa681dd09ced5826afd024ea99e0f6e_v001s.jpg",
  },
  {
    name: "IC 1296",
    velocity: "      3\n5.1 10  kilometers per second",
    distance: "75.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/17d/17d0a2f5d24b5a8f9e3bfd3087cf6c2e_v001s.jpg",
  },
  {
    name: "IC 13",
    velocity: "5711. kilometers per second",
    distance: "84.407 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/796/7961143d70df970376ae295011b4739f_v001s.jpg",
  },
  {
    name: "IC 130",
    velocity: "        4\n1.323 10  kilometers per second",
    distance: "195.49 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f77/f7734c0a6f44ba6b766ae21e98cc0c8b_v001s.jpg",
  },
  {
    name: "IC 1301",
    velocity: "      3\n4.0 10  kilometers per second",
    distance: "58.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/424/42491c2c81ba7ff359cd60eccae3742c_v001s.jpg",
  },
  {
    name: "IC 1302",
    velocity: "      3\n4.6 10  kilometers per second",
    distance: "68.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5df/5df91f6e8cbd6d39270b2ffd62d510ce_v001s.jpg",
  },
  {
    name: "IC 1303",
    velocity: "      3\n4.5 10  kilometers per second",
    distance: "66.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/414/4144ecc8548baf2c1805f3125d6f007b_v001s.jpg",
  },
  {
    name: "IC 1309",
    velocity: "      3\n7.9 10  kilometers per second",
    distance: "116.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/eb8/eb885ba96e9315bc42f8a8292251eb13_v001s.jpg",
  },
  {
    name: "IC 1313",
    velocity: "      3\n3.3 10  kilometers per second",
    distance: "48.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ac6/ac6f3194b51c3dfd0db8b44b041b7e7f_v001s.jpg",
  },
  {
    name: "IC 1317",
    velocity: "      3\n3.8 10  kilometers per second",
    distance: "56.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/757/757829e629179a5f804f74d2b43f8280_v001s.jpg",
  },
  {
    name: "IC 1319",
    velocity: "      3\n7.3 10  kilometers per second",
    distance: "108.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e48/e487d163b1ac407ac26492a3fc5416ea_v001s.jpg",
  },
  {
    name: "IC 1320",
    velocity: "      3\n5.0 10  kilometers per second",
    distance: "73.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a17/a17348a5488200c782bc494540d49485_v001s.jpg",
  },
  {
    name: "IC 1321",
    velocity: "      3\n6.7 10  kilometers per second",
    distance: "99. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/796/796365f025b5d85795052d51e6756477_v001s.jpg",
  },
  {
    name: "IC 1322",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b3c/b3ce3bc539a17d8efe7756d9b3b2c219_v001s.jpg",
  },
  {
    name: "IC 1324",
    velocity: "      3\n6.1 10  kilometers per second",
    distance: "90.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/820/820e14cce3e80a2816e45b9772efc8f8_v001s.jpg",
  },
  {
    name: "IC 1327",
    velocity: "      3\n9.7 10  kilometers per second",
    distance: "143.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/55f/55f0eb1a7113d5bb29865beeb224ac83_v001s.jpg",
  },
  {
    name: "IC 1328",
    velocity: "       4\n1.10 10  kilometers per second",
    distance: "162.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/640/640a0c0bb0f6fce555a750fb92aa1088_v001s.jpg",
  },
  {
    name: "IC 1330",
    velocity: "      3\n8.5 10  kilometers per second",
    distance: "125.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/efa/efae3b69a00a806c5c522db09a3e6642_v001s.jpg",
  },
  {
    name: "IC 1331",
    velocity: "      3\n5.8 10  kilometers per second",
    distance: "85.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/cb7/cb7238fec3896c562c46f90b52c6ba12_v001s.jpg",
  },
  {
    name: "IC 1332",
    velocity: "      3\n9.8 10  kilometers per second",
    distance: "145. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/19f/19f3fe38e4c917f8817c64d60ca0c711_v001s.jpg",
  },
  {
    name: "IC 1333",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f93/f93d92b2b293f50673f9699cea6204ae_v001s.jpg",
  },
  {
    name: "IC 1335",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/11a/11a902587fa5a2ac400abb80b8926989_v001s.jpg",
  },
  {
    name: "IC 1336",
    velocity: "      3\n8.4 10  kilometers per second",
    distance: "123.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/143/1439354224eaae6999b8be3c6d38e592_v001s.jpg",
  },
  {
    name: "IC 1337",
    velocity: "      3\n9.2 10  kilometers per second",
    distance: "136.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0f8/0f82f62456576616c622e614157c30c0_v001s.jpg",
  },
  {
    name: "IC 1338",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a32/a32ed6733a664e4d2e91dca1ec2d28c3_v001s.jpg",
  },
  {
    name: "IC 1339",
    velocity: "      3\n8.4 10  kilometers per second",
    distance: "124.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/31b/31b641150381b1497fe6c3eecfab3620_v001s.jpg",
  },
  {
    name: "IC 1341",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "134. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bfc/bfcbf643f8161fe2b38003402c59e1ed_v001s.jpg",
  },
  {
    name: "IC 1342",
    velocity: "      3\n8.1 10  kilometers per second",
    distance: "119.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/88a/88af91a10ad7ba2b1369025fdc4f545f_v001s.jpg",
  },
  {
    name: "IC 1343",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/447/447fde7a6eca230d41058b5a910a6a98_v001s.jpg",
  },
  {
    name: "IC 1344",
    velocity: "      3\n8.1 10  kilometers per second",
    distance: "119.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e12/e12579a2d2d9bce115269b0c1830a285_v001s.jpg",
  },
  {
    name: "IC 1345",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e5c/e5c08a07265960b8bdde582cce26a6a0_v001s.jpg",
  },
  {
    name: "IC 1346",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "166. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f6f/f6f55edd8a949150b37943de31bfa1d0_v001s.jpg",
  },
  {
    name: "IC 1347",
    velocity: "      3\n8.8 10  kilometers per second",
    distance: "130.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/243/2433a93888b7e241a189e38569e8ce41_v001s.jpg",
  },
  {
    name: "IC 1348",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3e7/3e71f331c8e0826c406f357d6a0b70d2_v001s.jpg",
  },
  {
    name: "IC 1349",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/21a/21a090cce84bc8460e6527048b883d07_v001s.jpg",
  },
  {
    name: "IC 1350",
    velocity: "      3\n8.4 10  kilometers per second",
    distance: "124.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c86/c86f13e92e073d5b07cb89912329460b_v001s.jpg",
  },
  {
    name: "IC 1351",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7f4/7f427e771f4f5508d767ec707b590857_v001s.jpg",
  },
  {
    name: "IC 1352",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/31c/31c62617fd19b17a20ffdfc0fad6ca38_v001s.jpg",
  },
  {
    name: "IC 1353",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/501/501f251c529f8982b0345249c93abaa2_v001s.jpg",
  },
  {
    name: "IC 1355",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9f3/9f30e32bae8e3b15806f0c00d07f510f_v001s.jpg",
  },
  {
    name: "IC 1356",
    velocity: "      3\n8.5 10  kilometers per second",
    distance: "125.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9c8/9c8b92043fbf71272f576f2390df5aa3_v001s.jpg",
  },
  {
    name: "IC 1357",
    velocity: "      3\n8.2 10  kilometers per second",
    distance: "122. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6bd/6bd58500cb63a20e71a7946568a66f79_v001s.jpg",
  },
  {
    name: "IC 1358",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/aa2/aa2743eedf37c6040ba94eeb38b32425_v001s.jpg",
  },
  {
    name: "IC 1359",
    velocity: "      3\n4.7 10  kilometers per second",
    distance: "69.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6ae/6ae35064e5e9ae1d551bc04a4836ca1f_v001s.jpg",
  },
  {
    name: "IC 1360",
    velocity: "      3\n8.5 10  kilometers per second",
    distance: "125.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/31c/31cba74fd07dcb148987288eba36ba3c_v001s.jpg",
  },
  {
    name: "IC 1361",
    velocity: "      3\n4.0 10  kilometers per second",
    distance: "58.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a80/a80c6ad90752a216a35da30cde465d6f_v001s.jpg",
  },
  {
    name: "IC 1362",
    velocity: "       4\n1.47 10  kilometers per second",
    distance: "217.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/922/922799a8862db159cb68a43fbc16755e_v001s.jpg",
  },
  {
    name: "IC 1364",
    velocity: "      3\n4.1 10  kilometers per second",
    distance: "60.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c21/c21d015f1da4930aca1fc2d2e8e2f3e8_v001s.jpg",
  },
  {
    name: "IC 1365",
    velocity: "       4\n1.46 10  kilometers per second",
    distance: "216.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/da8/da890c9711788cafb42f0ec8d0261461_v001s.jpg",
  },
  {
    name: "IC 1366",
    velocity: "       4\n1.45 10  kilometers per second",
    distance: "213.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b4a/b4a94cb986fd833574245b474302fdfa_v001s.jpg",
  },
  {
    name: "IC 1367",
    velocity: "      3\n4.0 10  kilometers per second",
    distance: "59.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1b5/1b5a628b388103320f0398b03a5146a9_v001s.jpg",
  },
  {
    name: "IC 1368",
    velocity: "      3\n4.0 10  kilometers per second",
    distance: "58.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bf1/bf172bc81ef706c64e82d4922561c257_v001s.jpg",
  },
  {
    name: "IC 1370",
    velocity: "       4\n1.51 10  kilometers per second",
    distance: "223.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/048/048c38615a98751ca1657341dff838a5_v001s.jpg",
  },
  {
    name: "IC 1371",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "133.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/11c/11ca4e1c2d2f11a6ba3c4ac8b03b8f0e_v001s.jpg",
  },
  {
    name: "IC 1372",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c5a/c5af0d4aeecbddf76378b68ce89774b0_v001s.jpg",
  },
  {
    name: "IC 1373",
    velocity: "       4\n1.06 10  kilometers per second",
    distance: "156.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f66/f66bb646a1ed923e9bfb10eaf6c721b1_v001s.jpg",
  },
  {
    name: "IC 1374",
    velocity: "       4\n1.06 10  kilometers per second",
    distance: "156.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9db/9dbc17926fe725ec74294ecce3a7626f_v001s.jpg",
  },
  {
    name: "IC 1375",
    velocity: "       4\n1.15 10  kilometers per second",
    distance: "170.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/656/6567f3c61e0a8c4017e875f9f448a4a7_v001s.jpg",
  },
  {
    name: "IC 1377",
    velocity: "      3\n9.0 10  kilometers per second",
    distance: "133.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0cf/0cf6db8a209bec09ec35b9bb7f41c128_v001s.jpg",
  },
  {
    name: "IC 1379",
    velocity: "       4\n1.28 10  kilometers per second",
    distance: "188.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0d8/0d802d8b43cafcd769b8da65ee3a6450_v001s.jpg",
  },
  {
    name: "IC 138",
    velocity: "4588. kilometers per second",
    distance: "67.810 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/12c/12c4b251f4c2f5974f509ca634e6aff9_v001s.jpg",
  },
  {
    name: "IC 1380",
    velocity: "       4\n1.27 10  kilometers per second",
    distance: "187.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b9f/b9fdd47fbde641aa56a57b3c7692ba81_v001s.jpg",
  },
  {
    name: "IC 1381",
    velocity: "      3\n9.2 10  kilometers per second",
    distance: "135.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/160/160b54eb581f9561241588b00ec4a504_v001s.jpg",
  },
  {
    name: "IC 1383",
    velocity: "      3\n9.0 10  kilometers per second",
    distance: "132.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/59f/59fef441db9aa6a20245bbe72477e675_v001s.jpg",
  },
  {
    name: "IC 1384",
    velocity: "      3\n5.6 10  kilometers per second",
    distance: "83.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/329/32926a2cf4074c0687c3bd6cbf5063b1_v001s.jpg",
  },
  {
    name: "IC 1385",
    velocity: "      4\n1.6 10  kilometers per second",
    distance: "229. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/59e/59e40aaa62aa6888af57871900d231f3_v001s.jpg",
  },
  {
    name: "IC 1386",
    velocity: "       4\n1.06 10  kilometers per second",
    distance: "156.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fa9/fa9c6190b1bcd9a1dfe77b6ce2536194_v001s.jpg",
  },
  {
    name: "IC 1387",
    velocity: "      3\n5.6 10  kilometers per second",
    distance: "82.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7a4/7a476f93b42eab34213de80b03121e49_v001s.jpg",
  },
  {
    name: "IC 1388",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "133.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d1a/d1ac4155887480453c4c976817cebbe7_v001s.jpg",
  },
  {
    name: "IC 1389",
    velocity: "      3\n6.3 10  kilometers per second",
    distance: "93.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fc9/fc91db89996b31b744ee79d4a3c6ec11_v001s.jpg",
  },
  {
    name: "IC 1390",
    velocity: "      3\n5.7 10  kilometers per second",
    distance: "84.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1af/1af7651f65408f24860345d7903a9a25_v001s.jpg",
  },
  {
    name: "IC 1391",
    velocity: "      3\n9.0 10  kilometers per second",
    distance: "133.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/58d/58d4bf40e525cb07875d6377ad3a0f78_v001s.jpg",
  },
  {
    name: "IC 1392",
    velocity: "      3\n4.4 10  kilometers per second",
    distance: "65.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/80d/80d660d96e0043869f0b967db3bd40ce_v001s.jpg",
  },
  {
    name: "IC 1393",
    velocity: "      3\n9.8 10  kilometers per second",
    distance: "145.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bf9/bf98571264fb61e76df073c004b11c56_v001s.jpg",
  },
  {
    name: "IC 1394",
    velocity: "      3\n8.8 10  kilometers per second",
    distance: "130.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/699/699fae0e12dfa8c48b844e742a2d02fa_v001s.jpg",
  },
  {
    name: "IC 1395",
    velocity: "      3\n7.8 10  kilometers per second",
    distance: "115.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a5b/a5b3ed89f034dfd225287d53d3788d3d_v001s.jpg",
  },
  {
    name: "IC 1397",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/33c/33cb9595c5cbfb6dd667bc6146a0c2ce_v001s.jpg",
  },
  {
    name: "IC 1398",
    velocity: "        4\n1.062 10  kilometers per second",
    distance: "157.02 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/77b/77b5fad80de4e3be81faa07b4847f3cb_v001s.jpg",
  },
  {
    name: "IC 1399",
    velocity: "       4\n1.16 10  kilometers per second",
    distance: "170.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/41b/41b981b00c1dc8c94706593ac4e69940_v001s.jpg",
  },
  {
    name: "IC 1401",
    velocity: "      3\n4.7 10  kilometers per second",
    distance: "69.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fe6/fe690e7560956828d7602b368992b838_v001s.jpg",
  },
  {
    name: "IC 1403",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9c8/9c8b0849520f6a233934733f6621f541_v001s.jpg",
  },
  {
    name: "IC 1404",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d63/d63f4ec2248c2163d72632deb8172eee_v001s.jpg",
  },
  {
    name: "IC 1405",
    velocity: "      3\n7.9 10  kilometers per second",
    distance: "116.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/35f/35f3c2a151c7c0c976e3ecf91719844f_v001s.jpg",
  },
  {
    name: "IC 1406",
    velocity: "      3\n8.2 10  kilometers per second",
    distance: "121.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/76e/76ee5246bf4c4e285549d61097a22668_v001s.jpg",
  },
  {
    name: "IC 1407-1",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bb2/bb2bd01033634a349f171182d93cf306_v001s.jpg",
  },
  {
    name: "IC 1407-2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/681/68102ab94f0083d10c677c47457e4337_v001s.jpg",
  },
  {
    name: "IC 1408",
    velocity: "      3\n5.3 10  kilometers per second",
    distance: "78.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/de0/de0c0ff0420e0a2ba5266a1157494cd9_v001s.jpg",
  },
  {
    name: "IC 1409",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/814/814404cdc0e81e599a878f3eb8bcdd89_v001s.jpg",
  },
  {
    name: "IC 141",
    velocity: "        4\n1.139 10  kilometers per second",
    distance: "168.30 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/dec/decb5216a8934e83c974619e32a1fd52_v001s.jpg",
  },
  {
    name: "IC 1410",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/af4/af43ab8a1ec808a5f7c46b48ca6324c2_v001s.jpg",
  },
  {
    name: "IC 1411",
    velocity: "      3\n8.0 10  kilometers per second",
    distance: "118.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/8a0/8a0f4a49abcada2c7e54fcabe3325fec_v001s.jpg",
  },
  {
    name: "IC 1412",
    velocity: "      3\n5.5 10  kilometers per second",
    distance: "81.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/28f/28faa2839c9ca40873a24727b8a8dd8b_v001s.jpg",
  },
  {
    name: "IC 1413-1",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f9a/f9aa6430c88c0dcccc9929094e500187_v001s.jpg",
  },
  {
    name: "IC 1413-2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ab0/ab0c3a8e1c3d863799f49d8013f17f78_v001s.jpg",
  },
  {
    name: "IC 1414",
    velocity: "      3\n8.4 10  kilometers per second",
    distance: "124.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/876/876aea9991d9868c02ab2d22243bcfa6_v001s.jpg",
  },
  {
    name: "IC 1417",
    velocity: "      3\n5.4 10  kilometers per second",
    distance: "80.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3a3/3a3bdb5a74ca93210dcc225080f4a066_v001s.jpg",
  },
  {
    name: "IC 1418",
    velocity: "      3\n8.3 10  kilometers per second",
    distance: "123.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c25/c2515f5d9f0813c8aa21cde596df7c58_v001s.jpg",
  },
  {
    name: "IC 1419",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b24/b24bb376fb1388384c394baec2b1ff3c_v001s.jpg",
  },
  {
    name: "IC 1420",
    velocity: "      3\n1.6 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/946/9460bd9c9ec6ac87623ba3e9d274a488_v001s.jpg",
  },
  {
    name: "IC 1421",
    velocity: "       4\n1.39 10  kilometers per second",
    distance: "205.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9d6/9d60e344606fc1d2728240e5706a3a83_v001s.jpg",
  },
  {
    name: "IC 1422",
    velocity: "9462. kilometers per second",
    distance: "139.85 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9e9/9e9c931367b84d1d89395e33a3c3e0f9_v001s.jpg",
  },
  {
    name: "IC 1423",
    velocity: "      3\n8.2 10  kilometers per second",
    distance: "121.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fcc/fcccdbdde2e3ac67e69d4f70ef17e589_v001s.jpg",
  },
  {
    name: "IC 1425",
    velocity: "      3\n9.6 10  kilometers per second",
    distance: "142.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ba5/ba51e784be65928f407323f102758b58_v001s.jpg",
  },
  {
    name: "IC 1427",
    velocity: "      3\n7.8 10  kilometers per second",
    distance: "115.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/466/4665451f004622af4609508b757bbf00_v001s.jpg",
  },
  {
    name: "IC 1428",
    velocity: "       4\n1.23 10  kilometers per second",
    distance: "181.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/25c/25c0b0b72115f34db4d9975b20407abd_v001s.jpg",
  },
  {
    name: "IC 1430",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c9d/c9dea79c193346119af9c481950a5f7d_v001s.jpg",
  },
  {
    name: "IC 1431",
    velocity: "       4\n1.66 10  kilometers per second",
    distance: "245.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/033/0332ccf820875e6b6f73d38a5cd970d4_v001s.jpg",
  },
  {
    name: "IC 1432",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/627/6277a26df2a87506bf153db18df91e77_v001s.jpg",
  },
  {
    name: "IC 1433",
    velocity: "       4\n1.18 10  kilometers per second",
    distance: "174.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/453/45345225ed915a244950ea7904237723_v001s.jpg",
  },
  {
    name: "IC 1435",
    velocity: "      3\n5.3 10  kilometers per second",
    distance: "78.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d0d/d0de9a9f60bd74533ba7bd5742edf578_v001s.jpg",
  },
  {
    name: "IC 1436",
    velocity: "      3\n8.6 10  kilometers per second",
    distance: "127. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ad4/ad4f15da3ffa8f122ea15ed0d504355d_v001s.jpg",
  },
  {
    name: "IC 1437",
    velocity: "      3\n8.9 10  kilometers per second",
    distance: "131.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/798/7982733b590f7a16e5b8e93f9a4df822_v001s.jpg",
  },
  {
    name: "IC 1438",
    velocity: "      3\n2.6 10  kilometers per second",
    distance: "31.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c29/c296e2da4460b01aaddaa6dccbfb5676_v001s.jpg",
  },
  {
    name: "IC 1439",
    velocity: "      3\n9.6 10  kilometers per second",
    distance: "141.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5a1/5a17d61a37989879f5e275a2268d09de_v001s.jpg",
  },
  {
    name: "IC 144",
    velocity: "        4\n1.234 10  kilometers per second",
    distance: "182.34 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fa2/fa25f74b9f3ff70fde416feef14907b6_v001s.jpg",
  },
  {
    name: "IC 1440",
    velocity: "      3\n4.2 10  kilometers per second",
    distance: "62.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/64d/64de18430ecdf2fecb636ad618fe4ea9_v001s.jpg",
  },
  {
    name: "IC 1441",
    velocity: "      3\n5.2 10  kilometers per second",
    distance: "77.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/74f/74f5e830eaca4c0914915c689c0ead3a_v001s.jpg",
  },
  {
    name: "IC 1443",
    velocity: "      3\n4.9 10  kilometers per second",
    distance: "72.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d86/d8676c0dec407750883ca977c6dc5249_v001s.jpg",
  },
  {
    name: "IC 1444",
    velocity: "      3\n8.5 10  kilometers per second",
    distance: "125.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/52e/52e37899a1e051893ffb396827221fcd_v001s.jpg",
  },
  {
    name: "IC 1445",
    velocity: "      3\n2.6 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d0a/d0a62eb155b68487c200aab8422d33df_v001s.jpg",
  },
  {
    name: "IC 1446",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/568/568992b5cb382e2818e6fbdcaa7511d9_v001s.jpg",
  },
  {
    name: "IC 1447",
    velocity: "      3\n2.9 10  kilometers per second",
    distance: "43.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0f5/0f5232d0bb9700f747d7b5ccc41b8db4_v001s.jpg",
  },
  {
    name: "IC 1449",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/aad/aadb39e7a7374720e4d54bf6eec57f81_v001s.jpg",
  },
  {
    name: "IC 145",
    velocity: "        4\n1.276 10  kilometers per second",
    distance: "188.62 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/296/2969acffb84725d2351f0d631bf64186_v001s.jpg",
  },
  {
    name: "IC 1451",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "133.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/1c2/1c259389201b7463a2169098d36b501a_v001s.jpg",
  },
  {
    name: "IC 1453",
    velocity: "      3\n8.0 10  kilometers per second",
    distance: "118.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/449/449b4db6d37245f7ea97cacdc0221992_v001s.jpg",
  },
  {
    name: "IC 1455",
    velocity: "      3\n4.8 10  kilometers per second",
    distance: "71.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/cc5/cc53de26d4cbd319c350a46e48b77769_v001s.jpg",
  },
  {
    name: "IC 1456",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b2f/b2fc332767666d6e6c1316ab15c0cf1d_v001s.jpg",
  },
  {
    name: "IC 1459",
    velocity: "      3\n1.7 10  kilometers per second",
    distance: "29.70 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6b7/6b78b640ffa211c375cfa17b7410eb24_v001s.jpg",
  },
  {
    name: "IC 1460",
    velocity: "      3\n7.3 10  kilometers per second",
    distance: "107.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b3f/b3f4a60a3e859e4c22473cd6f0474096_v001s.jpg",
  },
  {
    name: "IC 1461",
    velocity: "      3\n9.2 10  kilometers per second",
    distance: "136.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b68/b68036f77b26b9c584779a2d06b731d5_v001s.jpg",
  },
  {
    name: "IC 1464-1",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d15/d15d677de286fcfa37cb50aa043b8f62_v001s.jpg",
  },
  {
    name: "IC 1464-2",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "98.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/3aa/3aad5d54dc6d2d06fa532f51f2e76532_v001s.jpg",
  },
  {
    name: "IC 1466",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "87.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a7e/a7e05a9ef638fc372c3513e0f395a43d_v001s.jpg",
  },
  {
    name: "IC 1467",
    velocity: "      3\n4.1 10  kilometers per second",
    distance: "60.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/df7/df7c80bc3839a0a106727bec60631f9c_v001s.jpg",
  },
  {
    name: "IC 1468",
    velocity: "      3\n9.6 10  kilometers per second",
    distance: "142.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e89/e893a701aca1494f4843ac004e19395f_v001s.jpg",
  },
  {
    name: "IC 1469",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/43c/43cc06bf9681a46f2689478b59b11abe_v001s.jpg",
  },
  {
    name: "IC 147",
    velocity: "        4\n1.497 10  kilometers per second",
    distance: "221.30 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/345/345574056f85faa7c4bfac0267124e38_v001s.jpg",
  },
  {
    name: "IC 1471",
    velocity: "      3\n9.8 10  kilometers per second",
    distance: "144.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/658/658dd133309be0c9cc37a7d80724f115_v001s.jpg",
  },
  {
    name: "IC 1472",
    velocity: "      3\n7.7 10  kilometers per second",
    distance: "114.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/294/294469b21d972b26ee95a3042c5d2341_v001s.jpg",
  },
  {
    name: "IC 1473",
    velocity: "     2\n8. 10  kilometers per second",
    distance: "12.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/18f/18f73d0022ae0c83ed66a8c891ef1949_v001s.jpg",
  },
  {
    name: "IC 1474",
    velocity: "       3\n3.49 10  kilometers per second",
    distance: "51.65 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b22/b229302ef4c18e20835d4388ff4b9659_v001s.jpg",
  },
  {
    name: "IC 1476",
    velocity: "      3\n7.0 10  kilometers per second",
    distance: "103.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/cb6/cb6c193612015667bcd80044d4d03622_v001s.jpg",
  },
  {
    name: "IC 1479",
    velocity: "      3\n9.6 10  kilometers per second",
    distance: "141.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f47/f47265f8a09bd22fb495f05ed6e379e9_v001s.jpg",
  },
  {
    name: "IC 148",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0f2/0f2fdedce0fdd052cc4f38b6d7817163_v001s.jpg",
  },
  {
    name: "IC 1481",
    velocity: "      3\n6.1 10  kilometers per second",
    distance: "90.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/327/3271f867959fd9b5fcee4cf5efe5cb08_v001s.jpg",
  },
  {
    name: "IC 1482",
    velocity: "      3\n8.9 10  kilometers per second",
    distance: "131.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/be8/be8c1796221936f2d8f677a48ddb61ab_v001s.jpg",
  },
  {
    name: "IC 1484",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/060/060904200b5c8d48bfcd973dd65be09b_v001s.jpg",
  },
  {
    name: "IC 1488",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "194. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/40a/40a26ed210946cdd8f1fd4e14516c569_v001s.jpg",
  },
  {
    name: "IC 1489",
    velocity: "      3\n9.7 10  kilometers per second",
    distance: "144.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/784/78475246815da460ec857e2edf6220f9_v001s.jpg",
  },
  {
    name: "IC 149",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/61c/61c6f97a148c4c3107b3817a82961e51_v001s.jpg",
  },
  {
    name: "IC 1490",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "78.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c1a/c1a7c5ab2add6155f1d273c1632171bd_v001s.jpg",
  },
  {
    name: "IC 1491",
    velocity: "      3\n3.4 10  kilometers per second",
    distance: "49.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e0f/e0f3dbc05bf100d60e2532af71629073_v001s.jpg",
  },
  {
    name: "IC 1492",
    velocity: "      3\n5.2 10  kilometers per second",
    distance: "77.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/fee/feedc6aa09e01cda7f8d9133ac5abdad_v001s.jpg",
  },
  {
    name: "IC 1494",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5ba/5ba1d5d67e819b6fb0015b7ee2941e6b_v001s.jpg",
  },
  {
    name: "IC 1495",
    velocity: "      3\n6.4 10  kilometers per second",
    distance: "94.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e78/e78462d02448a210cc7bc326d8430690_v001s.jpg",
  },
  {
    name: "IC 1496",
    velocity: "      3\n5.2 10  kilometers per second",
    distance: "76.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/07b/07b76b8ad43c0714279de318b9c1158d_v001s.jpg",
  },
  {
    name: "IC 1498",
    velocity: "      3\n5.2 10  kilometers per second",
    distance: "77.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/82e/82eeec3712c1b9b6998267bc748a175e_v001s.jpg",
  },
  {
    name: "IC 15",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/206/2065a4c6205f800b84054dc34a2aa6f3_v001s.jpg",
  },
  {
    name: "IC 150",
    velocity: "5569. kilometers per second",
    distance: "82.309 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d16/d1605f34f5643de103462b9cf97d20b4_v001s.jpg",
  },
  {
    name: "IC 1500",
    velocity: "      3\n9.9 10  kilometers per second",
    distance: "147.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/46f/46f50ffcd5c23ca099252807a49e508f_v001s.jpg",
  },
  {
    name: "IC 1501",
    velocity: "      3\n5.2 10  kilometers per second",
    distance: "76.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/6c0/6c0910e86fba47b750988294c966d320_v001s.jpg",
  },
  {
    name: "IC 1502",
    velocity: "      3\n2.0 10  kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/244/2441544a68b6b9068cb6a9f734707cc2_v001s.jpg",
  },
  {
    name: "IC 1503",
    velocity: "      3\n6.2 10  kilometers per second",
    distance: "91.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c88/c882edf0ffc0c553011248bf6a24db05_v001s.jpg",
  },
  {
    name: "IC 1504",
    velocity: "      3\n6.3 10  kilometers per second",
    distance: "92.9 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/481/48138ed806dc602bb2155e7582d45cc5_v001s.jpg",
  },
  {
    name: "IC 1505",
    velocity: "      3\n6.5 10  kilometers per second",
    distance: "96.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f91/f91c4d4eec6b7ba6321ce863f8e7a989_v001s.jpg",
  },
  {
    name: "IC 1506",
    velocity: "      3\n9.6 10  kilometers per second",
    distance: "141.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/25c/25c91aa55910123288cc3fe954206962_v001s.jpg",
  },
  {
    name: "IC 1507",
    velocity: "      3\n5.3 10  kilometers per second",
    distance: "78.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/9c9/9c99264bb9b9d90add0b5bd0a36e0ac4_v001s.jpg",
  },
  {
    name: "IC 1508",
    velocity: "      3\n4.3 10  kilometers per second",
    distance: "63.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/eae/eae88d6bf9e45aa67129613baf0142c6_v001s.jpg",
  },
  {
    name: "IC 1509",
    velocity: "      3\n7.3 10  kilometers per second",
    distance: "108.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/bb7/bb71b5effe51b6bc7f8a96855ae95908_v001s.jpg",
  },
  {
    name: "IC 1510-1",
    velocity: "       4\n2.11 10  kilometers per second",
    distance: "312. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/aa3/aa3e21a1d7c77c23931a448c516e627e_v001s.jpg",
  },
  {
    name: "IC 1510-2",
    velocity: "       4\n2.11 10  kilometers per second",
    distance: "312. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a08/a089daf753dddb87ab2bf33c9bddb4b2_v001s.jpg",
  },
  {
    name: "IC 1513",
    velocity: "      3\n6.4 10  kilometers per second",
    distance: "94.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f1a/f1aa395ef48ab1d53d2742bf44e2515a_v001s.jpg",
  },
  {
    name: "IC 1515",
    velocity: "      3\n6.7 10  kilometers per second",
    distance: "98.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/d4a/d4a55f6d197242b9e8f366fff1b35a18_v001s.jpg",
  },
  {
    name: "IC 1516",
    velocity: "      3\n7.3 10  kilometers per second",
    distance: "107.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a2f/a2f4e8e91607a77bddbb898cafea1d7b_v001s.jpg",
  },
  {
    name: "IC 1517",
    velocity: "      3\n7.3 10  kilometers per second",
    distance: "107.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b7c/b7c9152e233678844eacd2104e84bff7_v001s.jpg",
  },
  {
    name: "IC 1518",
    velocity: "      4\n1.1 10  kilometers per second",
    distance: "166. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/20a/20a7fa14cd4169501e9aacf9407632e0_v001s.jpg",
  },
  {
    name: "IC 1519",
    velocity: "     3\n9. 10  kilometers per second",
    distance: "129. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/018/0186afa49110d21a2e30625ffb7544c3_v001s.jpg",
  },
  {
    name: "IC 152",
    velocity: "7955. kilometers per second",
    distance: "117.57 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/856/856e6d37cc250b596582a773c2824da2_v001s.jpg",
  },
  {
    name: "IC 1520",
    velocity: "      3\n9.0 10  kilometers per second",
    distance: "133.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/4cc/4cc86d8e8dc274a01cffe27e25ab7232_v001s.jpg",
  },
  {
    name: "IC 1521",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/daf/dafed2aad16eb044f4d038fd2f9d6376_v001s.jpg",
  },
  {
    name: "IC 1522",
    velocity: "      3\n6.5 10  kilometers per second",
    distance: "95.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/280/280469361fe9950289fe14535e466fc6_v001s.jpg",
  },
  {
    name: "IC 1523",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/64f/64f778ac9b9dcee5d1d98f0bb810a72e_v001s.jpg",
  },
  {
    name: "IC 1525",
    velocity: "       3\n5.02 10  kilometers per second",
    distance: "74.19 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/093/093944626e3b17675ba9d20ea75f4cc8_v001s.jpg",
  },
  {
    name: "IC 1526",
    velocity: "      3\n9.1 10  kilometers per second",
    distance: "135. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/872/8722f61744b8e9e82ed341e9db487b2a_v001s.jpg",
  },
  {
    name: "IC 1527",
    velocity: "      3\n8.6 10  kilometers per second",
    distance: "127.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/adb/adbedc42335acb98d3218da3ca13b3e2_v001s.jpg",
  },
  {
    name: "IC 1528",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/b8b/b8bd89f961b1b303cb1cd3ebfd1a833d_v001s.jpg",
  },
  {
    name: "IC 1529",
    velocity: "      3\n6.8 10  kilometers per second",
    distance: "100.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/924/9246b60d11fea5c3e437699e19a99701_v001s.jpg",
  },
  {
    name: "IC 1531",
    velocity: "      3\n7.7 10  kilometers per second",
    distance: "113.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/61f/61f42598ff88cc83622bb8ad9265d91a_v001s.jpg",
  },
  {
    name: "IC 1532",
    velocity: "      3\n1.9 10  kilometers per second",
    distance: "34.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e11/e11c08265a04a00ca1b55e70b82096c7_v001s.jpg",
  },
  {
    name: "IC 1534",
    velocity: "      3\n5.2 10  kilometers per second",
    distance: "77.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f8b/f8bcac162691e544e15438508991ab01_v001s.jpg",
  },
  {
    name: "IC 1535",
    velocity: "      3\n5.2 10  kilometers per second",
    distance: "77.1 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/028/028609c67a91f2c967f2f0b52141d394_v001s.jpg",
  },
  {
    name: "IC 1536",
    velocity: "      3\n5.1 10  kilometers per second",
    distance: "75.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/e4a/e4ae9d4773462bbf1d29d8e4ef76e207_v001s.jpg",
  },
  {
    name: "IC 154",
    velocity: "5544. kilometers per second",
    distance: "81.939 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/5a4/5a4e68e5f374410db08cc3aa03534c50_v001s.jpg",
  },
  {
    name: "IC 1540",
    velocity: "      3\n5.8 10  kilometers per second",
    distance: "86.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a50/a5041672310c1c41c9303754c441727c_v001s.jpg",
  },
  {
    name: "IC 1541",
    velocity: "      3\n5.9 10  kilometers per second",
    distance: "87.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/dcd/dcdc7c9e3c5ef52f036fc2cd2e95ec6b_v001s.jpg",
  },
  {
    name: "IC 1542",
    velocity: "      3\n7.4 10  kilometers per second",
    distance: "108.7 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/82a/82a0d5e441409c7a6ba61e62adf3696d_v001s.jpg",
  },
  {
    name: "IC 1543",
    velocity: "      3\n5.6 10  kilometers per second",
    distance: "83.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c0f/c0f360312159439f49b1c798f436a368_v001s.jpg",
  },
  {
    name: "IC 1544",
    velocity: "       3\n5.71 10  kilometers per second",
    distance: "84.4 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/7ec/7ec950b6bad64d14df7b74e8c195d04e_v001s.jpg",
  },
  {
    name: "IC 1545",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/458/458c443f8b6cfa644e9066c2840aec29_v001s.jpg",
  },
  {
    name: "IC 1548",
    velocity: "      3\n5.8 10  kilometers per second",
    distance: "85.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/408/408d0c6398f31497d9783f2969e280cd_v001s.jpg",
  },
  {
    name: "IC 1549",
    velocity: "       4\n1.21 10  kilometers per second",
    distance: "179.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/997/9977d330fffdc15dabc845246b75e24e_v001s.jpg",
  },
  {
    name: "IC 1550",
    velocity: "      3\n5.9 10  kilometers per second",
    distance: "87.2 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/03d/03d32467e7883f36e64c4b562c182820_v001s.jpg",
  },
  {
    name: "IC 1551",
    velocity: "       4\n1.30 10  kilometers per second",
    distance: "192.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/768/768bb4237943a9797faaf29b026c3672_v001s.jpg",
  },
  {
    name: "IC 1552",
    velocity: "       3\n5.60 10  kilometers per second",
    distance: "82.74 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/0f1/0f1b1e080191c3893c6daa2a9cf6ed23_v001s.jpg",
  },
  {
    name: "IC 1553",
    velocity: "      3\n2.9 10  kilometers per second",
    distance: "36.5 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2b7/2b74c5281f5f8efd484bcc564115b477_v001s.jpg",
  },
  {
    name: "IC 1555",
    velocity: "      3\n1.6 10  kilometers per second",
    distance: "18.0 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ab2/ab29eac8671a505bfe385638a1f25d84_v001s.jpg",
  },
  {
    name: "IC 1557",
    velocity: "Missing[NotAvailable] 299792 kilometers per second",
    distance: "Missing[NotAvailable]",
    image:
      "http://www.wolframcdn.com/waimage/hset107/f56/f56ed1e064a1861e505ffbe116edbb7c_v001s.jpg",
  },
  {
    name: "IC 1558",
    velocity: "      3\n1.6 10  kilometers per second",
    distance: "9.00 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/a83/a83b38bdd1cf3e6728fdad59cdf1acd2_v001s.jpg",
  },
  {
    name: "IC 1559",
    velocity: "     3\n5. 10  kilometers per second",
    distance: "72. megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/ae9/ae9e7eda840e5638082de581997945b8_v001s.jpg",
  },
  {
    name: "IC 156",
    velocity: "5339. kilometers per second",
    distance: "78.909 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/c5f/c5fb4b0bc8b87c49a30701ce02f5497b_v001s.jpg",
  },
  {
    name: "IC 1561",
    velocity: "      3\n3.9 10  kilometers per second",
    distance: "57.8 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/549/549f8fd5f3a4369e949939a755e52201_v001s.jpg",
  },
  {
    name: "IC 1562",
    velocity: "      3\n3.7 10  kilometers per second",
    distance: "55.3 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/471/47183dd7b42e1597c9d473a9a24c95af_v001s.jpg",
  },
  {
    name: "IC 1563",
    velocity: "6110. kilometers per second",
    distance: "89.381 megaparsecs",
    image: "",
  },
  {
    name: "IC 1564",
    velocity: "      3\n5.3 10  kilometers per second",
    distance: "77.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/2ab/2ab7a8ba28d0a2ae0664cbacd6de8d8e_v001s.jpg",
  },
  {
    name: "IC 1565",
    velocity: "       4\n1.13 10  kilometers per second",
    distance: "166.6 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/532/532faaa7d0d1e0f452be8aa8865bda37_v001s.jpg",
  },
  {
    name: "IC 1566",
    velocity: "        4\n1.192 10  kilometers per second",
    distance: "176.12 megaparsecs",
    image:
      "http://www.wolframcdn.com/waimage/hset107/629/629c6f2f0aca13204d4dec7d18332365_v001s.jpg",
  },
];

function formatVelocity(input, sciNotation = true) {
  // Only new line strings need replacing
  if (!input.includes("\n")) return input;
  // Replace consecutive whitespaces with a single space
  input = input.replace(/\s+/g, " ").split(/\s/g);
  const exponent = input[1];
  const number = input[2];

  // Format the output
  if (sciNotation) {
    return `${number} * 10^${exponent} kilometers per second`;
  } else {
    return `${
      parseFloat(number) * Math.pow(10, parseInt(exponent))
    } kilometers per second`;
  }
}

function rand(items) {
  // "|" for a kinda "int div"
  return items[(items.length * Math.random()) | 0];
}

const galaxyEl = document.getElementById("galaxy");
const buttonEl = document.querySelector("button");

function getRandomGalaxy() {
  const g = rand(galaxies);
  if (g.velocity.includes("Missing") || g.distance.includes("Missing")) {
    getRandomGalaxy();
  } else {
    galaxyEl.innerHTML = `
    <style>
table,
tr,
td,
th {
  border: 1px solid #fff;
}

td,
th {
  padding: 4px;
}

img {
  margin: 8px;
}
    </style>
    <h2 class="text-2xl text-center mb-2">${g.name}</h2>
    <table style="margin: 1em auto"> 
      <tr> 
        <th>Distance (x axis)</th>
        <td>${g.distance}</td>
      </tr>
      <tr>
        <th>Velocity (y axis)</th>
        <td>${formatVelocity(g.velocity, false)}</td>
      </tr>
    </table> 
    <img src="${
      g.image
    }" alt="galaxy image" style="display: block; margin: 0 auto">
  `;
  }
}

buttonEl.addEventListener("click", () => {
  getRandomGalaxy();
});
