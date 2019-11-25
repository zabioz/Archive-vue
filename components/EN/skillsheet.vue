<template >
    <v-card class="content ma-2" outlined color="#5b88ee">
      <v-list-item two-line v-for="n in item" class="white text--primary">
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
            {title:'We hope you are interested in our company. Please feel free to contact me.',
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