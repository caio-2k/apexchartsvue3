<template>
    <!-- ENTIRE SCREEN -->
    <div class="home flex flex-col h-full">
        <!-- BOX MAIN -->
        <main class="flex flex-col mt-40 h-full justify-center items-center bg-white">
            <!-- CARD CONTAINER -->
            <div class="card-container">
                <div
                    class="
                        bg-gray-50
                        rounded-lg
                        shadow-xl
                    "
                >
                    <apexchart
                        height="700"
                        width="700"
                        type="bar"
                        :options="chartOptions"
                        :series="series"
                    ></apexchart>
                    <div class="text-right">
                    <router-link class="font-bold underline" to="/">Voltar?</router-link>
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
    name: 'allState',
    data() {
        return {
            totalCases: 0,
            name: 'App',
            // Datos de la gráfica No: 1
            series: [
                {
                    name: 'Casos',
                    data: [],
                },
            ],
            chartOptions: {
                plotOptions: {
                    bar: {
                        borderRadius: 2,
                        horizontal: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                title: {
                    text: 'Casos de Covid por Estado Brasileiro ',
                    align: 'center',
                    margin: 10,
                    style: {
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: undefined,
                        color: '#263238',
                    },
                },
                xaxis: {
                    categories: [],
                },
                noData: {
                    text: 'Procurando dados...',
                },
            },
        }
    },
    async mounted() {
        const datas = await fetch(
            'https://covid19-brazil-api.now.sh/api/report/v1'
        )
            .then((res) => {
                if (res.ok) return res.json()
                throw new Error('Ops an error ocorred!! =(')
            })
            .catch((err) => {
                return undefined
            })
        if (datas) {
            await Promise.all(
                // datas.data.slice(0, 3).map((data) => {
                datas.data.map((data) => {
                    this.chartOptions.xaxis.categories.push(data.state)
                    this.series[0].data.push(data.cases)
                    this.totalCases += data.cases
                })
            )
        }
    },
}
</script>

<style scoped lang="scss">
</style>