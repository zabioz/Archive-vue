<template >
    <v-card class="ma-2" outlined color="#5b88ee">
      <v-list-item three-line v-for="n in item" class="white text--primary">
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
            {title: 'システム開発',
            content: 'モバイルデバイスアプリケーション開発iOS及びAndroidデバイス向けのNativeアプリケーション開発を行っています。'
            },
            {title:'WEBシステム開発',
            content:'フロントエンドからバックエンドまで、要件定義から基盤設計・構築、システム開発保守運用まで、特にオープンソースフレームワークを活用したＷｅｂシステム開発を行っています。'
            },
            {title:'AI・IOT',
            content:'ビッグデータの蓄積等をＰＣ、モバイルで実現するシステム開発を行っています。又機械学習・深層学習を活用するサービスの開発を行っています。'
            },
            {title:'ERPソリューション',
            content:'ＥＲＰパッケージを活用したシステム開発における、設計、開発を行っています。'
            },
            {title:'COBOL開発',
            content:'COBOLを用いての、金融機関、官公庁向け基幹システム構築、業務アプリケーション開発を行っています。'
            },
            {title:'外国籍ＩＴエンジニア採用・活用コンサルテーション',
            content:'当社は２０１５年から外国籍ＩＴエンジニアの採用を積極的に行っております。今までに培った外国籍ＩＴエンジニア採用・活用のノウハウをベースに、外国籍ＩＴエンジニアの積極採用・活用をお考えのお客様にコンサルテーションを行っています。'
            }
        ]
        }
    }
}
</script>
<style>
item{
    word-break: break-all;
}


</style>