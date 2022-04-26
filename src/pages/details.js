import React from 'react'
import Topbar from '../layout/topbar';
class  Details extends React.Component{
    render(){

        return (
            <div className="main">
                   <Topbar/>

            <div className="cardBox">
            </div>

            <div className="details  ">
                <div className="recentAnalysis  ">
                  <div className="cardHeader">
                      <h4> تفاصيل تحليل بيانات شهر رمضان   </h4>
                     </div>
                </div>         
         </div>
         <div className="row  m-4" >
           
            <div className="col-md-4">
                <h4 className="text-center"> تصنيف عام </h4>
                <canvas id="myChart" className="heightChart" ></canvas>
              </div>
            <div className="col-md-4">
                <h4 className="text-center"> تصنيف الخصومات  </h4>

            <canvas id="myChart2" className="heightChart" ></canvas>
            </div>  
            <div className="col-md-4">
            <h4 className="text-center"> تصنيف الوقت   </h4>
            <canvas id="myChart3"  className="heightChart" ></canvas>
            </div>
            
            
            <div className="col-md-12 mt-4" >
                <table id="table_id" className="  display" >
                    <thead>
                        <tr>
                            <th> اسم العميل </th>
                            <th>رقم الهاتف </th>
                            <th>التصنيف العام  </th>
                            <th>تصنيف الخصومات   </th>
                            <th>تصنيف الوقت    </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td>محمد أحمد </td>
                          <td>05012345678</td>
                          <td>ممتاز</td>
                          <td>غير مهتم </td>
                          <td> مسائي </td>
                        </tr>
                        <tr>
                            <td>سارة  محمد  </td>
                            <td>0501233219</td>
                            <td>متوسط </td>
                            <td>مهتم </td>
                            <td>صباحي </td>
                            </tr>
                            
                            <tr>
                            <td>أسامة خالد </td>
                            <td>0500501234</td>
                            <td>جيد </td>
                            <td>مهتم </td>
                            <td>مسائي </td>
                            </tr>
    
                    </tbody>
                </table>
            </div>
           
            


         </div>
        </div>
        )
    }
}
export default Details;