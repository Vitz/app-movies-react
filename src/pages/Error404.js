import React from 'react';
import './Error404.css'

class Categories extends React.Component {
    render() {
        return (
            <div>
                <div className="ag-page-404">
                    <div className="ag-toaster-wrap">
                        <div className="ag-toaster">
                            <div className="ag-toaster_back"></div>
                            <div className="ag-toaster_front">
                                <div className="js-toaster_lever ag-toaster_lever"></div>
                            </div>
                            <div className="ag-toaster_toast-handler">
                                <div className="ag-toaster_shadow"></div>
                                <div className="js-toaster_toast ag-toaster_toast js-ag-hide"></div>
                            </div>
                        </div>

                        <canvas id="canvas-404" className="ag-canvas-404"></canvas>
                        <img alt="error404" className="ag-canvas-404_img" src="https://raw.githubusercontent.com/SochavaAG/example-mycode/master/pens/404-error-smoke-from-toaster/images/smoke.png" />
                    </div>
                </div>
                </div>

                );
              }
            }

            export default Categories;

            