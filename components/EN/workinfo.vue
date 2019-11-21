<template >
    <v-card class="ma-2" outlined >
      <v-list-item three-line v-for="n in item">
        <v-list-item-content>
        <v-list-item-title> {{n.title}} </v-list-item-title>
        <v-list-item-subtitle > {{n.content}} </v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
    </v-card>
</template>

<script>
export default {
data: function(){
    return {
        item:[
            {title: 'System development',
            content: 'Mobile device application development We are developing Native applications for iOS and Android devices.'
            },
            {title:'WEB System development',
            content:'From front-end to back-end, from requirements definition to basic design and construction to system development and maintenance operations, we are developing Web systems, especially using open source frameworks.'
            },
            {title:'AI・IOT',
            content:'We are developing systems that realize accumulation of big data, etc. by PC and mobile. We are also developing services that utilize machine learning and deep learning.'
            },
            {title:'ERP solution',
            content:'We are designing and developing system development using ERP package.'
            },
            {title:'COBOL development',
            content:'We are developing core systems for financial institutions and government agencies and business application development using COBOL.'
            },
            {title:'Recruitment / Utilization consultation for foreign national IT engineers',
            content:'We have been actively recruiting foreign national IT engineers since 2015. Based on the know-how on recruiting and utilizing foreign national IT engineers that we have cultivated so far, we consult with customers who are thinking of actively hiring and utilizing foreign national IT engineers.'
            }
        ]
        }
    }
}
</script>
<style>
.item{
    word-break: break-all;
}


</style>