<template>
    <!-- ENTIRE SCREEN -->
    <div class="home flex flex-col h-full">
        <!-- BOX MAIN -->
        <main class="flex flex-col h-full justify-center items-center bg-white">
            <!-- CARD CONTAINER -->
            <div class="card-container">
                <div
                    class="
                        bg-gray-50
                        rounded-lg
                        shadow-xl
                        px-10
                        py-5
                    "
                >
                    <apexchart
                        height="300"
                        width="600"
                        type="bar"
                        :options="chartOptions"
                        :series="series"
                    ></apexchart>
                    <div class="text-right">
                    <h1 class="uppercase">API STATUS: {{ info }}</h1>
                    <router-link class="font-bold underline" to="/allstate">Gráfico por estado?</router-link>
                    </div>
                </div>
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

    data: function () {
        return {
            info: null,
            name: 'App',
      
            series: [
                {
                    name: 'Casos',
                    data: [],
                },
                {
                    name: 'Suspeitos',
                    data: [],
                },
                {
                    name: 'Mortes',
                    data: [],
                },
            ],

            chartOptions: {
                colors: ['#5C4742', '#A5978B', '#FF0000'],
                chart: {
                    // stacked: true,
                },

                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: false,
                        columnWidth: 50,
                    },
                },

                dataLabels: {
                    enabled: true,
                    textAnchor: 'middle',
                    distributed: false,
                    offsetX: 0,
                    offsetY: 0,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        //will use same as defined previously
                        colors: undefined,
                    },
                    background: {
                        enabled: true,
                        foreColor: '#fff',
                        padding: 4,
                        borderRadius: 2,
                        borderWidth: 1,
                        borderColor: '#fff',
                        opacity: 0.9,
                        dropShadow: {
                            enabled: false,
                            top: 1,
                            left: 1,
                            blur: 1,
                            color: '#000',
                            opacity: 0.45,
                        },
                    },
                    dropShadow: {
                        enabled: false,
                        top: 1,
                        left: 1,
                        blur: 1,
                        color: '#000',
                        opacity: 0.45,
                    },
                },

                title: {
                    text: 'Status Covid',
                    align: 'center',
                },
                xaxis: {
                    categories: [],
                },

                yaxis: {
                    title: {
                        text: undefined,
                    },
                },
                noData: {
                    text: 'Procurando dados...',
                },

                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center',
                    offsetX: 40,
                    itemMargin: {
                        horizontal: 10,
                        vertical: 30,
                    },
                },
            },
        }
    },
    mounted: function () {
        this.getData()
    },

    methods: {
        getData: async function () {
            await this.axios
                .get(
                    'https://covid19-brazil-api.vercel.app/api/report/v1/brazil/uf/rn'
                )
                .then((covid_response) => {
                    const dados = (this.data = covid_response.data)

                    this.chartOptions.xaxis.categories.push(
                        covid_response.data.state
                    )
                    this.series[0].data.push(dados.cases)
                    this.series[1].data.push(dados.suspects)
                    this.series[2].data.push(dados.deaths)
                })
            await this.axios
                .get('https://covid19-brazil-api.vercel.app/api/status/v1')
                .then((response) => (this.info = response.data.status))
        },
        
    },
}
</script>

<style scoped lang="scss">
</style>
