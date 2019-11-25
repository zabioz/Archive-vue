<template>
    <v-timeline>
        <v-timeline-item
        class="pa-0"
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        :small="year.size"
        >
            <template>
                <span
                :class="`font-weight-bold ${year.color}--text`"
                v-text="year.year">
                </span>
            </template>
            <v-card class="vcard pa-0" outlined :flat="year.flat" color="#5b88ee">
            <v-card-text v-html="year.card" v-show="year.card" class="white text--primary"></v-card-text>
            </v-card>
            <div class="vtext" v-html="year.text">
                
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
    data:() =>({
        card:true,
        view:true,
        years:[
            {   size: false,
                color:"primary",
                year:"2006",
                card:`<div color:"rgba(0, 0, 0, 0.54)"><h3 style:"rgba(0, 0, 0, 0.87)">株式会社アーカイブ設立</h3><li>東京都北区赤羽南１−２１−３カラムビール２F本店所在地を置く</li><li>資本金１００万円</li><li>SAP社R/３を使用したシステム開発、Webシステム開発、金融・流通関係システム開発を中心としたソフトウェア関連事業を開始</li></div>`
            },
            {
                size: true,
                color:"primary",
                year:"2008~2012",
                flat:true,
                text:`<li>差本金３００万円に増資</li><li>本店所在地を東京都北区志茂１−１６−１１山元ビル１Fに移転</li><li>本店所在地を東京都北区赤羽南１−２１−３カラムビール２Fに移転</li>`
            },
            {   
                flat:true,
                size: true,
                color:"primary",
                year:"2012~2016",
                text:`<li>ソフトウェア開発関連事業の新規分野として、スマートフォンアプリ開発（アンドロイド分野）を開始</li><li>ソフトウェア開発関連事業の新規分野として、スマートフォンアプリ開発（IOS分野）を開始</li>`
            },
            {
                size: false,
                color:"primary",
                year:"2017",
                card:'<div><h3 style="rgba(0, 0, 0, 0.87)">外国籍ITエンジニアを中心とした会社開始</h3></div>'
            },
             {
                flat: true,
                size: true,
                color:"primary",
                year:"2017~2019",
                text:`<li>外国籍ITエンジニアの適正な管理を推進する為、公益財団法人入管協会（JIA)に入会</li><li>資本金を６００万円に増資</li><li>本店所在地を東京都北区赤羽３−２２−６−１０２に移転</li>`
            }
        ]
    }),


methods: {
    }
}
</script>
<style>
.vcard {
    
    list-style: square;
}

.vtext{
    list-style: square;
    color:rgba(0, 0, 0, 0.54);
}
</style>