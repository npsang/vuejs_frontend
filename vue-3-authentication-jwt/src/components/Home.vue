<template>
  <div class="container" style="width:100%; padding:5px">
    <div>
    <div style=" margin-bottom: 10px;">
    </div>
    <div class="card" style="width: 100%; height: 400px;">
    <div class="card-header">
     <button @click="changeInput" type="button" class="btn btn-outline-primary">Check handwritten text</button>
      <button @click="changeUpdate" type="button" class="btn btn-outline-success" style =" margin-left:5px;">Document from your computer</button>
    </div>
       
    <div v-if="updateDoc===false" class="row card-body">
      <div class="col">
        <textarea class="form-control" aria-label="With textarea" style="width: 100%;height:100%; margin-top:0px"></textarea>
      </div>
    </div>
    <div v-else class="card-body"><button type="button" class="btn btn-outline-primary" style="margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);">update resource from your computer</button>
    </div>
   
</div>
   <div class="card" style="margin-top:20px">
      <div class="card-body" >
                        <span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-light">Light</span>
<span class="badge badge-dark">Dark</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Home",
  data() {
    return {
      content: "",
      updateDoc: false,
    };
  },
  methods: {
    changeUpdate() {
      this.updateDoc = true;
    },
    changeInput(){
      this.updateDoc = false;
    }
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
