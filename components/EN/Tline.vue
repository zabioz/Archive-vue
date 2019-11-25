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
                card:`<div style="margin:0.4em; color:"rgba(0, 0, 0, 0.54)"><h3 style:"rgba(0, 0, 0, 0.87)">Established Archive Co., Ltd.</h3><li>1-21-3 Akabane Minami, Kita-ku, Tokyo</li><li>Capital 1 million ￥</li><li>Started software-related business centered on system development using SAP R / 3, Web system development, and financial / distribution related system development</li></div>`
            },
            {
                size: true,
                color:"primary",
                year:"2008~2012",
                flat:true,
                text:`<li>Increased capital to 3 million ¥</li><li>Relocated head office to Yamamoto Building 1F, 1-16-11 Shimo, Kita-ku, Tokyo</li><li>Moved the head office location to 2nd floor of Column Beer 1-2-1-3 Akabane Minami, Kita-ku, Tokyo</li>`
            },
            {   
                flat:true,
                size: true,
                color:"primary",
                year:"2012~2016",
                text:`<li> Starting smartphone application development (Android field) as a new field in software development-related business </ li> <li> Starting smartphone application development (IOS field) as a new field in software development-related business </ li>`
            },
            {
                
                color:"primary",
                year:"2017",
                card:'<div style = "margin: 0.4em;"> <h3 style = "rgba (0, 0, 0, 0.87)"> Started a company centered on foreign IT engineers </h3> </div>'
            },
             {
                flat: true,
                size: true,
                color:"primary",
                year:"2017~2019",
                text:`<li> Join the Immigration Association (JIA) to promote appropriate management of foreign IT engineers </ li> <li> Capital increased to 6 million yen </ li> <li> Location of head office Moved to 3-22-6-102 Akabane, Kita-ku, Tokyo </ li>`
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