<template>
    <div class="box">
        <div :class="classObjectArrow" @click="$emit('getGeolocation')">
            <i class="fas fa-location-arrow" :class="classObjectIcon"></i>
        </div>
    </div>
</template>

<script>
export default{
    props:["coords", "fetchCoords"],
    computed: {
        classObjectArrow() {
            return {
                arrowOn: this.coords,
                arrowOff: !this.coords,
            }
        },
        classObjectIcon(){
            return {
                black: this.coords,
                white: !this.coords,
                pulse: this.fetchCoords,
            }
        }
    }
}

</script>

<style scoped lang="scss">
    .box {
        display: flex; 
        position: absolute; 
        margin: 1rem 2rem; 
        background-color: transparent; 
        width: 100%; 
        height: 5%; 
        gap: 1rem;
        z-index: 998;

        @media (min-width: 768px) { 
        padding-top: 0;
        padding-bottom: 0; 
        width: auto; 
        top: 60px;
        left: 60px;
        }


        .arrowOn {
            background-color: #ffffff;
            display: flex; 
            padding-left: 1rem;
            padding-right: 1rem;  
            align-items: center; 
            border-radius: 0.375rem; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
        }

        .arrowOff {
            background-color: #002d38;
            display: flex; 
            padding-left: 1rem;
            padding-right: 1rem;  
            align-items: center; 
            border-radius: 0.375rem; 
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
        }

        .white{
            color:#ffffff;
        }
        .black{
            color:#002d38;
        }

        .pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

            @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: .5;
            }
            }; 
        }
    }
</style>