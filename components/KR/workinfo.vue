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
            {title: '시스템 개발',
            content: '모바일 장치 응용 프로그램 개발 iOS 및 Android 장치 용 Native 애플리케이션 개발을하고 있습니다.'
            },
            {title:'WEB 시스템 개발',
            content:'프론트 엔드에서 백 엔드까지 요구 사항 정의에서 기반 설계 및 구축 시스템 개발 유지 보수 및 운영 까지 특히 오픈 소스 프레임 워크를 활용한 Web 시스템 개발을하고 있습니다.'
            },
            {title:'AI・IOT',
            content:'빅 데이터의 축적 등을 PC, 모바일에서 제공하는 시스템 개발을하고 있습니다. 또한 역학 학습 심층 학습을 활용하는 서비스를 개발하고 있습니다.'
            },
            {title:'ERP 솔루션',
            content:'ERP 패키지를 활용 한 시스템 개발에서 설계, 개발하고 있습니다.'
            },
            {title:'COBOL 개발',
            content:'COBOL을 사용하여 금융 및 공공 기관용 기간 시스템 구축, 업무 응용 프로그램 개발을하고 있습니다.'
            },
            {title:'외국인 IT 엔지니어 채용 · 활용 컨설팅',
            content:'당사는 2015 년부터 외국인 IT 엔지니어의 채용을 적극적으로 실시하고 있습니다. 지금까지 축적 외국 국적 IT 엔지니어 채용 · 활용의 노하우를 바탕으로 외국인 IT 엔지니어의 적극적 채용 용 · 활용을 생각하는 고객에게 컨설팅을 실시하고 있습니다.'
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