<template>

  <div id="footer">
      <div class="row arow">
           <div class="col-xl-4 col-md-6 col-12 acol" >
              <div class="jumbotron jumbo">
                 <div class="grade" style="padding:10px 0px;">
             <img src="../assets/logo.png" class="imagica" />
            </div>
              ramaiah institute of technology, msr nagar, bangalore  560054, karnataka, india
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-12 acol" >
            <div class="p-3 jumbo rounded" id="map" title="M S Ramaiah">
              <gmap-map
                :center="{ lat: 13.030955299999999, lng: 77.56485593968172}"
                :zoom="12"
                style="width:100%;  height: 100%"
              >
                <gmap-marker
                  :position="{ lat: 13.030955299999999, lng: 77.56485593968172}"
                ></gmap-marker>
              </gmap-map>


            </div>
          </div>
          <div class="col-xl-5 col-md-12 col-12  acol" >
            <div class="subcontains">
              <div class="jumbotron jumbo">
                <form class="form-inline" @submit.prevent > 
                  <input class="form-control mr-sm-2 " type="email" placeholder="xyz@gmail.com" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Send</button>
              </form>
              </div>
            </div>
          </div>
      </div>
      <hr/>
      <div class="row brow">
        <div   class="col-12 col-md-5 text-md-center">
            © 2020 Team StartDust. All Rights Reserved.

        </div>
        <div class="offset-md-4 col-md-3 col-12 pt-4 mt-3 pt-md-0 mt-md-0 d-flex justify-content-around">
          <a
              data-toggle="tooltip" data-placement="top" title="facebook"
            > <i class="fab fa-facebook h4"></i> </a>
          <a
              data-toggle="tooltip" data-placement="top" title="instagram"
          > <i class="fab fa-instagram h4"></i> </a>
          <a
              data-toggle="tooltip" data-placement="top" title="gmail"
          > <i class="fas fa-envelope h4"></i> </a>
          <a
              data-toggle="tooltip" data-placement="top" title="developer"
          > <i class="far fa-address-card h4"></i> </a>
        </div>
      </div>
  </div>

</template>

<script >
export default {

}
</script>


<style scoped>
  #footer{
    border : 1px solid black;
    background: #17141D;
    color: white;
    padding: 50px;
    margin-top: 0px;
    position: absolute;
    z-index: 0;
    width: 100%;
  }

  .arow{
    padding: 10px;
    text-transform: uppercase;
    font-size: 20px;
    font-family: ubuntu;
  }
  .brow{
    padding: 10px;
  }
  .acol{
    margin-top: 10px;
    color: #17141D;
    font-size: 20px;
  }

  .jumbo{
    height: 250px;
    background: #17141D;
    color: white;
    font-size: 19px;
    font-weight: bolder;
    font-family: ubuntu;
    box-shadow: 2px 4px 10px 2px black;
  }

  .jumbo:hover{
      box-shadow: 1px 2px 5px 2px black;

  }
 li{
  list-style: none;
 }
 form {
  text-align: center;
 }
 button{
  margin: 5px;
 }
 form{
  margin: 10px 0px;
 }
 hr{

      box-shadow: 1px 2px 5px 2px black;
 }

 .imagica{
  position: absolute;
  top: 0;
  height: 150px;
  left: 10px;
  animation: 1s op linear infinite;

 }
 @keyframes op{
  0%{
    opacity: .3
  }50%{
    opacity: .2
  }100%{
    opacity: .3
  }
 }

</style>
 