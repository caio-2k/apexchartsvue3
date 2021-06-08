<template>
    <!-- ENTIRE SCREEN -->
    <div class="home flex flex-col h-screen">
        <!-- BOX MAIN -->
        <main class="flex flex-col justify-center items-center h-full">
            <!-- CARD CONTAINER -->
            <div class="card-container">
                <div
                    class="
                        bg-white
                        text-black
                        font-bold
                        rounded-lg
                        shadow-lg
                        p-10
                        animate__animated animate__fadeInDown animate_faster
                    "
                >
                    <apexchart
                        ref="chart1"
                        height="800"
                        width="900"
                        type="bar"
                        :options="options"
                        :series="series"
                    ></apexchart>
                </div>
                <hr />
            </div>
            <!-- END CARD CONTAINER -->
        </main>
        <!-- END BOX MAIN -->
    </div>
    <!-- END ENTIRE SCREEN -->
</template>

<script>
export default {
    name: 'Home',

    setup() {
        return {
            name: 'App',
            // Datos de la gráfica No: 1
            series: [
                {
                    data: [],
                },
            ],

            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: [],
                },
                noData: {
                    text: 'Carregando dados...',
                },
            },
        }
    },
    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            this.axios
                .get(
                    'https://covid19-brazil-api.vercel.app/api/report/v1'
                )
                .then((res) => {
                    this.$refs.chart1.updateSeries([
                        {
                            name: 'Sales',
                            data: res.data.data,
                        },
                    ])
                    const dados = res.data.data
                    console.log(dados)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
}
</script>

<style scoped lang="scss">
nav {
    > a {
        font-size: 1em;
        font-weight: 300;
        letter-spacing: 0.2em;
        color: #04d361;
        text-transform: uppercase;
        text-decoration: none;
        -webkit-transition: color 0.15s ease;
        -moz-transition: color 0.15s ease;
        transition: color 0.15s ease;
        &:hover {
            color: #0ff577;
            text-shadow: none;
            border: none;
        }
    }
}
</style>
