<template>
    <v-card class="mx-auto" max-width="600" rounded="xl" color="grey-darken-4">
      <v-img
        class="align-end text-white"
        height="300"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
  
      <v-card-subtitle class="pt-4"> Number 10 </v-card-subtitle>
  
      <v-card-text>
        <div>Whitehaven Beach</div>
  
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn color="orange">
          <v-row justify="center">
            <v-dialog v-model="dialog" persistent width="auto">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5">
                  Use Google's location service?
                </v-card-title>
                <v-card-text
                  >Let Google help apps determine location. This means sending
                  anonymous location data to Google, even when no apps are
                  running.</v-card-text
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green-darken-1"
                    variant="text"
                    @click="dialog = false"
                  >
                    Disagree
                  </v-btn>
                  <v-btn
                    color="green-darken-1"
                    variant="text"
                    @click=""
                  >
                    Agree
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-btn>
  
        <v-btn color="orange"> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </template>
 
 
 
 
 <script>
    export default {
      data() {
        return {
          dialog: false,
        }
      },
     
    }
  </script>
  