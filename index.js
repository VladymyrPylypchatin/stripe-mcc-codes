const mcc = require('merchant-category-code');  
const fs = require('fs');


const mccCodes = `
7623
8931
7311
0763
4511
4582
4119
7996
5937
5932
7998
8911
5971
5970
7531
7535
7538
5531
6011
5542
8675
5533
5532
9223
5462
7929
7230
7995
5940
7932
5551
4457
5942
5192
7933
4131
8244
7278
4899
5946
5441
7512
7542
5511
5521
1750
7217
5811
8398
5169
8351
5641
8049
8041
5993
8641
7349
7296
8220
5046
5139
7333
4111
4816
7372
7379
5734
5045
1771
5039
7392
8241
5977
7277
7997
4215
9211
7321
4411
5451
7911
7273
8021
5311
7393
5815
5817
5816
5818
5964
5965
5967
5960
5969
5966
5968
5962
5310
8011
5963
5714
5813
5912
5122
7216
5099
5309
5812
8299
5997
5552
5065
1731
7622
5732
8211
9702
7361
7394
7342
5651
5814
6012
9222
5718
5713
5992
5193
5422
5983
7261
7641
5712
5681
1520
5947
5231
5950
7992
7801
9399
7802
9406
7800
5411
5251
5072
7298
5975
1711
5945
5200
8062
7011
5722
5085
7375
6399
6300
9950
5944
0780
7211
7210
8111
5948
5211
6010
4468
5262
1740
7297
8099
8071
5047
8699
5611
5691
5051
5699
5599
7399
5499
5399
7299
5719
2741
7999
7699
5999
5271
7832
4214
5592
5013
5571
5561
5733
5994
6051
6540
5199
5261
8050
5021
8043
8042
5976
8031
5921
5198
7523
4112
5933
5995
5172
7395
7221
5044
7829
5131
5074
8651
9402
5094
8999
4225
7338
4011
6513
5735
7519
5973
8661
1761
7339
6211
5541
5949
7251
5661
7629
5598
1799
2842
5941
7032
7941
5655
5972
5111
5943
5996
4723
5697
9311
7276
4121
4812
4814
4821
5998
8734
7922
7012
7534
4784
7991
7549
7033
4789
4722
7511
7513
2791
5978
9405
5137
5931
4900
5331
0742
7993
7994
7841
8249
7631
7692
5300
5698
4829
5631
5621
5935
7322
7277
6540
8111
6051
6012
7320
8398
`;

const codes = [...new Set(mccCodes.split('\n').map(c => c.replace('\n', '')))]
    .map(c => mcc(c))
    .filter(c => c);



fs.writeFileSync('./mcc-codes.json', JSON.stringify(codes));

console.log(codes.find(c => c.mcc == '8111'));


