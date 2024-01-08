import React from 'react'

function Dashboard({slots}) {
  return <>    

        {
            slots.isProgress?<>
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className={`card border-left-${slots.color} shadow h-100 py-2`}>
                      <div className="card-body">
                          <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                  <div className={`text-xs font-weight-bold text-${slots.color} text-uppercase mb-1`}>
                                      {slots.title}
                                  </div>
                                  <div className="row no-gutters align-items-center">
                                      <div className="col-auto">
                                          <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">{slots.price}%</div>
                                      </div>
                                      <div className="col">
                                          <div className="progress progress-sm mr-2">
                                              <div className="progress-bar bg-info" role="progressbar"
                                                  style={{width:`${slots.price}%`,
                                                          ariaValueNow:slots.price,
                                                          ariaValueMin:"0",
                                                          ariaValueMax:"100"}}>                                                    
                                                </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-auto">
                                  <i className={slots.icon}></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </>:<>
                <div className="col-xl-3 col-md-6 mb-4">
                <div className={`card border-left-${slots.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${slots.color} text-uppercase mb-1`}>
                                    {slots.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">${slots.price}</div>
                            </div>
                            <div className="col-auto">
                                <i className={slots.icon}></i>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
        }
        
  </>
}

export default Dashboard