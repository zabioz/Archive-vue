<template>
<v-layout>
<div>
    <ul class="ttext font-weight-bold ma-2">
        <v-chip large label outlined color="primary">
            General meeting of shareholders
        </v-chip>
        <li style="list-style:none" class="ma-2">
            <v-chip class="vtext" label outlined color="primary" style="margin-left:70px;">
            Auditor
            </v-chip>
        </li>
    </ul>
    <ul class="ttext font-weight-bold ma-2">
        <v-chip large label outlined color="primary">
            Board of Directors
        </v-chip>
    </ul>

    <li style="list-style:none" class="ma-2">
        <v-chip class="vtext" label outlined color="primary" style="margin-left:100px;">
            Sales / General Affairs
        </v-chip>
    </li>
    <ul>
        <v-chip large class="ttext" label outlined color="primary">
            CEO
        </v-chip>
    </ul>
    <li style="list-style:none" class="ma-2">
        <v-chip class="vtext" label outlined color="primary" style="margin-left:100px;">
            IT Division
        </v-chip>
    </li>
    <div class="d-flex flex-column" style="margin-left:170px">
        <v-chip small class="ma-1" label color="primary" >
            SAP/R3
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            Finance / Distribution
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            web development
        </v-chip>
        <v-chip small class="ma-1" label color="primary" >
            Smartphone device
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