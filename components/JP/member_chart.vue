<template>
<v-layout>
    
   <v-timeline class="d-flex flex-column" style="align-items: center">
    <v-chip label color="primary" class="ma-2">
        株主総会
    </v-chip>
    
    <v-chip label color="primary" class="ma-2 ">
        取締役員会
    </v-chip>
    <v-chip label color="primary" class="ma-2">
        代表取締役
    </v-chip>
    </v-timeline>
    <div class="d-flex flex-column">
        <p class="horizon_line" />
        <p class="vertical_line" />
        <p class="horizon_line" />
        
    </div>
    <div class="d-flex flex-column">
    <p class="horizon_line" style="margin-top:50px;" />
    <p class="horizon_line" style="margin-top:25px;" />
    <p class="horizon_line" style="margin-top:30px;" />
    </div>
        
    <div class="d-flex flex-column" style="align-items:center">
    <v-chip label color="primary" class="ma-2">
        監査役
    </v-chip>
    <v-chip label color="primary" class="ma-2">
        営業・総務
    </v-chip>
    <v-chip label color="primary" class="ma-2">
        IT 事業部
    </v-chip>
    </div>

    <div class="d-flex flex-column" style="align-items: center">
    <v-chip label color="primary" class="ma-2">
        SAP/R3
    </v-chip>
    <v-chip label color="primary" class="ma-2">
        金融・流通
    </v-chip>
    <v-chip label color="primary" class="ma-2">
        web開発
    </v-chip>
    <v-chip label color="primary" class="ma-2">
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