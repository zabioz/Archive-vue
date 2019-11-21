<template>
<v-layout>
    <v-card width=100% outlined text-center ma-2>
<table >
       <tr> 
        <th>Establishment</th> <td>2006 / 10 / 10</td>
        </tr>
            <tr>
               <th>Capital</th> <td>6,000,000¥</td>
            </tr>
            <tr>
                <th>Officer</th>
                <td>
                    <li>CEO 角田 元輝</li>
                    <li>Director 鈴木 隆志</li>
                    <li>Director 李 埈昊</li>
                    <li>Director 李 在殷</li>
                    <li>Director 高 成洙</li>
                    <li>Auditor 柴崎 秀明（Tax accountant)</li>
                </td>
            </tr>
             <tr>
                 <th>Business content</th><td>Software development centered on foreign national IT engineers</td>
            </tr>
              <tr>
                  <th>Related business</th><td>and foreign national IT engineer support business</td>
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
