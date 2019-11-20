<template>
<v-layout>
    <div class="tree">    
        <ul>
        <li>
        <v-chip label color="primary" >
        株主総会
        </v-chip>
        <ul>
        <li>

        <v-chip label color="primary" >
        取締役員会
        </v-chip>
        <ul>
        <li>

        <v-chip label color="primary" >
        代表取締役
    </v-chip>

    </li>
    </ul>
    </li>
    </ul>
    </li>
    </ul>
</div>


    <div class="d-flex flex-column" style="align-items:center">
    <v-chip label color="primary" >
        監査役
    </v-chip>
    <v-chip label color="primary" >
        営業・総務
    </v-chip>
    <v-chip label color="primary" >
        IT 事業部
    </v-chip>
    </div>

    <div class="d-flex flex-column" style="align-items: center">
    <v-chip label color="primary" >
        SAP/R3
    </v-chip>
    <v-chip label color="primary" >
        金融・流通
    </v-chip>
    <v-chip label color="primary" >
        web開発
    </v-chip>
    <v-chip label color="primary" >
        スマホデバイス
    </v-chip>
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

.tree ul {
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
}
</style>