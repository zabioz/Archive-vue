<template>
<v-layout>
<div>
    <ul class="ttext font-weight-bold ma-2">
        <v-chip large label outlined color="primary">
            주주총회
        </v-chip>
        <li style="list-style:none" class="ma-2">
            <v-chip class="vtext" label outlined color="primary" style="margin-left:70px;">
            감사
            </v-chip>
        </li>
    </ul>
    <ul class="ttext font-weight-bold ma-2">
        <v-chip large label outlined color="primary">
            이사위원회
        </v-chip>
    </ul>

    <li style="list-style:none" class="ma-2">
        <v-chip class="vtext" label outlined color="primary" style="margin-left:100px;">
            영업 및 총무
        </v-chip>
    </li>
    <ul>
        <v-chip large class="ttext" label outlined color="primary">
            대표 이사
        </v-chip>
    </ul>
    <li style="list-style:none" class="ma-2">
        <v-chip class="vtext" label outlined color="primary" style="margin-left:100px;">
            IT 사업부
        </v-chip>
    </li>
    <div class="d-flex flex-column" style="margin-left:170px">
        <v-chip small class="ma-1" label color="primary" >
            SAP/R3
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            금융 · 유통
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            web개발
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            스마트폰 디바이스
        </v-chip>
    </div>
</div>
</v-layout>
</template>
<script>
export default {
    
}
</script>
<style>

.v-chip__content{
    color:white;
    font-weight: bold;
    
}
.ttext .v-chip__content{
    color:#5b88ee;
}
.vtext .v-chip__content{
    color:rgba(0, 0, 0, 0.87)
}
</style>