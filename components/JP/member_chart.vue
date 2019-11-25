<template>
<v-layout>
<div>
    <ul class="ttext font-weight-bold ma-2">
        <v-chip large label outlined color="primary">
                株主総会
        </v-chip>
        <li style="list-style:none" class="ma-2">
            <v-chip class="vtext" label outlined color="primary" style="margin-left:70px;">
                監査役
            </v-chip>
        </li>
    </ul>
    <ul class="ttext font-weight-bold ma-2">
        <v-chip large label outlined color="primary">
            取締役員会
        </v-chip>
    </ul>

    <li style="list-style:none" class="ma-2">
        <v-chip class="vtext" label outlined color="primary" style="margin-left:100px;">
            営業・総務
        </v-chip>
    </li>
    <ul>
        <v-chip large class="ttext" label outlined color="primary">
            代表取締役
        </v-chip>
    </ul>
    <li style="list-style:none" class="ma-2">
        <v-chip class="vtext" label outlined color="primary" style="margin-left:100px;">
            IT 事業部
        </v-chip>
    </li>
    <div class="d-flex flex-column" style="margin-left:170px">
        <v-chip small class="ma-1" label color="primary" >
            SAP/R3
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            金融・流通
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            web開発
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            スマホデバイス
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