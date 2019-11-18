<template >
    <v-card class="content ma-2" outlined>
      <v-list-item two-line v-for="n in item">
        <v-list-item-content>
        <v-list-item-title> {{n.title}} </v-list-item-title>
        <v-list-item-subtitle> {{n.content}} </v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
    </v-card>
</template>

<script>
export default {
data: function(){
    return {
        item:[
            {title: 'Phone',
            content: 'iOS, Objective-C/Swift, Android, Kotlin/Java'
            },
            {title:'Web',
            content:'Java, PHP, Ruby on Rails'
            },
            {title:'AI',
            content:'Ruby, Python'
            },
            {title:'ETC',
            content:'SAP/R3, COBOL'
            },
            {title:'당사에 관심을 가져 주시면 감사하겠습니다. 부담없이 연락해주십시오.',
            content:''
            }
        ]
        }
    }
}
</script>
<style>
.content{
    height:auto;
    word-break: break-all;
}


</style>