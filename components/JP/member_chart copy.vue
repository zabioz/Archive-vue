<template>
<v-layout>
        <div class="tree d-flex flex-column" style="align-items:center">
            <v-chip class="ma-2 vtext" label outlined color="primary">
                営業・総務
            </v-chip>
        </div>

    <span class="font-weight-bold">
    代表取締役
    </span>
<v-card class="ma-2" outlined color="#5b88ee" dark >
    <v-card-text class="white d-flex flex-column" style="align-items:center">
        <v-chip class="ma-2 vtext" label outlined color="primary">
        IT 事業部
        </v-chip>
        <v-divider color="primary">

        </v-divider>
    <v-chip class="ma-2" label color="primary" >
        SAP/R3
    </v-chip>
    <v-chip class="ma-2" label color="primary" >
        金融・流通
    </v-chip>
    <v-chip class="ma-2" label color="primary" >
        web開発
    </v-chip>
    <v-chip class="ma-2" label color="primary" >
        スマホデバイス
    </v-chip>
    </v-card-text>
</v-card>
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
.vtext .v-chip__content{
    color:black;
}
/* .tree ul {
    padding-left:0px;
    padding-top:30px;
    position: relative;
}
.tree li{
    float: left;
    text-align: center;
    list-style-type: none;
    position: relative;
}
.tree li::before, .tree li::after{
    content: '';
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid #000000;
    width: 50%;
    height: 30px;
}

.tree li:after{
    right: auto;
    left: 50%;
    border-left: 1px solid #000000;
}
.tree ul ul::before{
    content:"";
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 1px solid #000000;
    width:0;
    height:30px;
    margin-left: -1;
}
.tree li:only-child::after, .tree li:only-child::before {
    display: none;
}
.tree li:only-child{ padding-top: 0; }

.tree li:first-child::before, .tree li:last-child::after{
    border: 0 none;
}

.line{
    display: flex;
    align-items: center;
    position: absolute;
}
.horizon_line{
    display:flex;
    width:5em;
    border-bottom: 0.2em solid gray;
}
.vertical_line{
    display:flex;
    height: 5em;
    width:1px;
    border-right: 0.2em solid gray;
} */
</style>