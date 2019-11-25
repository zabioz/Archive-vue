<template>
<v-layout>
    <v-card width=100% outlined text-center ma-2 color="primary">
<v-simple-table>
       <tr>
        <th class="title">설립</th><td>2006년 10월 10일</td>
        </tr>
            <tr>
               <th class="title">자본금</th> <td>6,000,000엔</td>
            </tr>
            <tr>
                <th class="title">임원</th>
                <td>
                    <dd><v-icon>mdi-account-tie</v-icon>대표이사 角田 元輝</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>이사 鈴木 隆志</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>이사 李 埈昊</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>이사 李 在殷</dd>
                    <dd><v-icon>mdi-account-outline</v-icon>이사 高 成洙</dd>
                    <dd><v-icon>mdi-account</v-icon>감사 柴崎 秀明（세무사)</dd>
                </td>
            </tr>
             <tr>
                 <th class="title">사업내용</th>
                 <td>외국인 IT 엔지니어를 중심으로 한 소프트웨어 개발</td>
            </tr>
              <tr>
                  <th class="title">관련사업</th>
                  <td>및 외국인 IT 엔지니어 지원 사업</td>
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
