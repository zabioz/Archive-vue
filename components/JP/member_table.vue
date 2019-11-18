<template>
<v-layout>
    <v-card width=100% outlined text-center ma-2>
<table >
       <tr>
        <th>設立</th><td>2006年 10月 10日</td>
        </tr>
            <tr>
               <th>資本金</th> <td>6,000,000円</td>
            </tr>
            <tr>
                <th>役員</th>
                <td>
                    <dd>代表取締役 角田 元輝</dd>
                    <dd>取締役 鈴木 隆志</dd>
                    <dd>取締役 李 埈昊</dd>
                    <dd>取締役 李 在殷</dd>
                    <dd>取締役 高 成洙</dd>
                    <dd>監査役 柴崎 秀明（税理士)</dd>
                </td>
            </tr>
             <tr>
                 <th>事業内容</th><td>外国籍ＩＴエンジニアを中心としたソフトウェア開発</td>
            </tr>
              <tr>
                  <th>関連事業</th><td>並びに外国籍ＩＴエンジニア支援事業</td>
                </tr>
    </table>
    </v-card>
</v-layout>
</template>
<script>
export default {
    name: 'memvertable',

  data: () => ({
        member:[
            {name:""}
        ]
    })
}
</script>
<style>
th {
    padding:0.4em;
}
td {
    padding-left: 3em;
}
td dd {
    padding:0.4em;
}
</style>
