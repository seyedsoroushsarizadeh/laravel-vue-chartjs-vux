<script>
import { Bar } from "vue-chartjs";
import store from "../store";

export default {
    extends: Bar,
    mounted() {
        this.renderChart(
            {
                labels: store.state.labels ,
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: store.state.data
                    }
                ]
            },
            { responsive: true, maintainAspectRatio: false }
        );
    }
};
</script>

