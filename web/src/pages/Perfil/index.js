import React from 'react';
import { Header } from './styles';

function Perfil() {
  return (
    <>
       

       
          <Header>
          <div class="profile-banner" >
       
            <div class="row ">
                <div class="col-md-6 ml-auto text-lg-right">

                    <div class="text-right">
                        <div class="dropdown mb-5">
                            <a href="#" class="btn btn-transparent text-light dropdown-hover p-0" data-toggle="dropdown">
                                <i class=" vl_ellipsis-fill-h"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right vl-dropdown">
                                <a class="dropdown-item" href="#"> Edit</a>
                                <a class="dropdown-item" href="#"> Delete</a>
                                <a class="dropdown-item" href="#"> Settings</a>
                            </div>
                        </div>
                    </div>

                    <div class="profile-follower-info">
                        <div class="d-inline-block px-4 text-left text-light">
                            <strong class="f14 d-block">9</strong>
                            <p>Follower</p>
                        </div>
                        <div class="d-inline-block px-4 text-left text-light">
                            <strong class="f14 d-block">37</strong>
                            <p>Following</p>
                        </div>
                        <div class="d-inline-block px-4 text-left text-light">
                            <strong class="f14 d-block">5</strong>
                            <p>Level</p>
                        </div>
                    </div>

                    <div class="mt-4">
                        <a href="#" class="btn btn-sm btn-info btn-pill pl-5 pr-5">Follow</a>
                        <a href="#" class="btn btn-sm btn-purple btn-pill pl-5 pr-5">Message</a>
                    </div>
                </div>
            </div>
        </div>

            <div class="container-fluid">
            <div class="row">
            <div class="col-xl-4 col-md-6 profile-info-position">
                    <div class="card card-shadow mb-4 ">
                        <div class="card-body">
                            <div class="text-center">
                                <div class="mt-4 mb-3">
                                    <img class="rounded-circle" src="assets/img/avatar/avatar-large3.jpg" width="85" alt=""/>
                                </div>
                                <h5 class="text-uppercase mb-0">Jane Doe</h5>
                                <p class="text-muted mb-0">Sr. Marketing Executive </p>
                                <div class="rattings mb-4">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star-o text-warning"></i>
                                </div>
                                <div class="profile-social-link mb-4">
                                    <a href="#" class="mx-2"><i class="fa fa-facebook-square"></i></a>
                                    <a href="#" class="mx-2"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="mx-2"><i class="fa fa-youtube"></i></a>
                                </div>
                                <div class="badge-icon mb-4">
                                    <img src="assets/img/badge/level.svg" width="50" alt="Level" data-toggle="tooltip" data-placement="top" title="Level 5"/>
                                    <img src="assets/img/badge/status.svg" width="50" alt="Status" data-toggle="tooltip" data-placement="top" title="Status"/>
                                    <img src="assets/img/badge/disable.svg" width="50" alt="Disable" data-toggle="tooltip" data-placement="top" title="Disable"/>
                                    <img src="assets/img/badge/trendy.svg" width="50" alt="Trendy" data-toggle="tooltip" data-placement="top" title="Trendy"/>
                                    <img src="assets/img/badge/monthly-top-seller.svg" width="50" alt="Monthly Top Seller" data-toggle="tooltip" data-placement="top" title="Monthly Top Seller"/>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
            </div>
            </div>
          </Header>
         
        
    </>
  );
}

export default Perfil;