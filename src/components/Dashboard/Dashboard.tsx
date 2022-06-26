import { fontSize } from "@mui/system";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './Dashboard.scss';
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const dashboard = () => {

    const openNav = () => {
        const sidnavElement = document.getElementById('mySidenav');
        const mainElement = document.getElementById("main");
        if (sidnavElement != null && mainElement != null) {
            sidnavElement.style.width = "250px";
            mainElement.style.marginLeft = "250px";
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
    }

    const closeNav = () => {

        const sidnavElement = document.getElementById('mySidenav');
        const mainElement = document.getElementById("main");
        if (sidnavElement != null && mainElement != null) {
            sidnavElement.style.width = "0";
            mainElement.style.marginLeft = "0";
            document.body.style.backgroundColor = "white";
        }
    }

    const chartSeries1 = 
           [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, 
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }]
         
        const chartoption1: ApexOptions =  {
            chart: {
              height: 350,
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              type: 'datetime',
              categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
              x: {
                format: 'dd/MM/yy HH:mm'
              },
            },
        }
const chartseries2 = [
    {
        name: 'Actual',
        data: [
            {
                x: '2011',
                y: 12,
                goals: [
                    {
                        name: 'Expected',
                        value: 14,
                        strokeWidth: 2,
                        strokeDashArray: 2,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2012',
                y: 44,
                goals: [
                    {
                        name: 'Expected',
                        value: 54,
                        strokeWidth: 5,
                        strokeHeight: 10,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2013',
                y: 54,
                goals: [
                    {
                        name: 'Expected',
                        value: 52,
                        strokeWidth: 10,
                        strokeHeight: 0,
                        strokeLineCap: 'round',
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2014',
                y: 66,
                goals: [
                    {
                        name: 'Expected',
                        value: 61,
                        strokeWidth: 10,
                        strokeHeight: 0,
                        strokeLineCap: 'round',
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2015',
                y: 81,
                goals: [
                    {
                        name: 'Expected',
                        value: 66,
                        strokeWidth: 10,
                        strokeHeight: 0,
                        strokeLineCap: 'round',
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2016',
                y: 67,
                goals: [
                    {
                        name: 'Expected',
                        value: 70,
                        strokeWidth: 5,
                        strokeHeight: 10,
                        strokeColor: '#775DD0'
                    }
                ]
            }
        ]
    }
]

    const chartoptions2: ApexOptions = {
       
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        colors: ['#00E396'],
        dataLabels: {
            formatter: function (val: any, opt: any) {
                const goals =
                    opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                        .goals

                if (goals && goals.length) {
                    return `${val} / ${goals[0].value}`
                }
                return val
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Actual', 'Expected'],
            markers: {
                fillColors: ['#00E396', '#775DD0']
            }
        }
    };

    //   var chart = new ApexCharts(document.querySelector("#chart1"), options);
    //   chart.render();
    return (
        <div id="dashboard">
            <div className="dashboard_main">
                <div className="container-fluid">
                    <div className="page_header">
                        <h1 className="page-title m-0">Dashboard</h1>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="javascript:void(0);">Home</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </div>
                    {/* <!--------------------------------------------------------------------------------->
<!------------------------------dashbord------------------------------------------->
<!---------------------------------------------------------------------------------> */}
                    <div className="row">
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="card bg-primary text-white">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="small">Earnings (Monthly)</div>
                                            <div className="text-lg fw-bold">$40,000</div>
                                        </div>
                                        <i className="fa fa-calculator me-2"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between small">
                                    <a className="text-white" href="#!">View Report</a>
                                    <div className="text-white"><i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="card bg-warning  text-white">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="small">Earnings (Monthly)</div>
                                            <div className="text-lg fw-bold">$40,000</div>
                                        </div>
                                        <i className="fas fa-dollar-sign"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between small">
                                    <a className="text-white" href="#!">View Report</a>
                                    <div className="text-white"><i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="card bg-success text-white">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="small">Earnings (Monthly)</div>
                                            <div className="text-lg fw-bold">$40,000</div>
                                        </div>
                                        <i className="fa fa-list"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between small">
                                    <a className="text-white" href="#!">View Report</a>
                                    <div className="text-white"><i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-3 mb-4">
                            <div className="card bg-danger text-white">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="small">Earnings (Monthly)</div>
                                            <div className="text-lg fw-bold">$40,000</div>
                                        </div>
                                        <i className="fas fa-comment-alt"></i>
                                    </div>
                                </div>
                                <div className="card-footer d-flex align-items-center justify-content-between small">
                                    <a className="text-white" href="#!">View Report</a>
                                    <div className="text-white"><i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--------------------------------------------------------------------------------->
<!--------------------------------chart-------------------------------------------->
<!---------------------------------------------------------------------------------> */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <div className="card">
                                {/* <div id="chart"></div> */}
                                <Chart
                                    options={chartoption1}
                                    series={chartSeries1}
                                    type="bar"
                                    // width="500"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                {/* <div id="chart1"></div> */}
                                <Chart
                                    options={chartoptions2}
                                    series={chartseries2}
                                    type="bar"
                                    // width="500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <!--------------------------------------------------------------------------------->
<!---------------------------------table------------------------------------------->
<!---------------------------------------------------------------------------------> */}
                    <div className="table-responsive mt-4">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Si</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Amout</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Address</td>
                                    <td>sample</td>
                                    <td>100</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Address</td>
                                    <td>sample</td>
                                    <td>100</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Address</td>
                                    <td>sample</td>
                                    <td>100</td>
                                    <td>10000</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Address</td>
                                    <td>sample</td>
                                    <td>100</td>
                                    <td>10000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default dashboard;