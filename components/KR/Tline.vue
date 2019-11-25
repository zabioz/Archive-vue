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
        
        years:[
            {   size: false,
                color:"primary",
                year:"2006",
                card:`<div style="margin:0.4em; color:"rgba(0, 0, 0, 0.54)"><h3 style:"rgba(0, 0, 0, 0.87)">주식회사 아카이브 설립</h3><li>도쿄도 키타구 아카바네 남쪽１−２１−３칼럼빌딩２F본점 소재지를 둠</li><li>자본금100만엔</li><li>SAP사R/３을이용한 시스템 개발, Web시스템 개발, 금융 · 유통 관계 시스템 개발을 중심으로 한 소프트웨어 관련 사업을 시작</li></div>`
            },
            {
                size: true,
                color:"primary",
                year:"2008~2012",
                flat:true,
                text:`<li>자본금 300만엔 으로 증자</li><li>본점 소재지를 도쿄도 키타 구 시모 1-16-11 야마모토 빌딩 1F로 이전</li><li>도쿄도 키타구 아카바네 남쪽１−２１−３칼럼빌딩２F로 이전</li>`
            },
            {   
                flat:true,
                size: true,
                color:"primary",
                year:"2012~2016",
                text:`<li>소프트웨어 개발 관련 사업의 신규 분야로 스마트 폰 앱 개발 (안드로이드 분야) 시작</li><li>소프트웨어 개발 관련 사업의 신규 분야로 스마트 폰 앱 개발 (IOS 분야) 시작</li>`
            },
            {
                
                color:"primary",
                year:"2017",
                card:'<div style="margin:0.4em;"><h3 style="rgba(0, 0, 0, 0.87)">외국인 IT 엔지니어를 중심으로 한 회사 시작</h3></div>'
            },
             {
                flat: true,
                size: true,
                color:"primary",
                year:"2017~2019",
                text:`<li>외국인 IT 엔지니어의 적정한 관리를 추진하기 위해 공익 재단법인 입관 협회 (JIA)에 가입</li><li>자본금 600만엔 으로 증자</li><li>본점 소재지를 도쿄도 키타 구 아카바네 3-22-6-102로 이전</li>`
            }
        ]
    }),


methods: {
    }
}
</script>
<style>
.vcard {
    white-space: pre-wrap;
    list-style: square;
}

.vtext{
    list-style: square;
    color:rgba(0, 0, 0, 0.54);
}
</style>