<template>
<v-layout>
    <v-card width=100% outlined text-center ma-2 color="primary">
<v-simple-table>
       <tr>
        <th class="title">Establishment</th><td>2006 / 10 / 10</td>
        </tr>
            <tr>
               <th class="title">Capital</th> <td>6,000,000¥</td>
            </tr>
            <tr>
                <th class="title">Officer</th>
                <td>
                    <dd><v-icon>mdi-account-tie</v-icon>CEO 角田 元輝</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>Director 鈴木 隆志</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>Director 李 埈昊</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>Director 李 在殷</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>Director 高 成洙</dd>
                    <dd><v-icon>mdi-account</v-icon>Auditor 柴崎 秀明（Tax accountant)</dd>
                </td>
            </tr>
             <tr>
                 <th class="title">Business content</th>
                 <td>Software development centered on foreign national IT engineers</td>
            </tr>
              <tr>
                  <th class="title">Related business</th>
                  <td>and foreign national IT engineer support business</td>
                </tr>
    </v-simple-table>
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
td {
    padding-left: 3em;
}
td dd {
    padding:0.4em;
}
</style>
