(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"/n5M":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"row q-pa-md"},[i("div",{staticClass:"col-md-4 offset-md-4 col-sm-8 offset-sm-2"},[i("q-card",[i("q-card-title",[t._v("\n\t\t\t\t"+t._s(t.movie.detail.title+" ("+t.movie.detail.year+")")+"\n\t\t\t")]),i("q-card-media",[i("q-parallax",{attrs:{src:t.movie.detail.poster,height:500}},[i("div",{attrs:{slot:"loading"},slot:"loading"},[t._v("\n\t\t\t\t\t\tLoading ...\n\t\t\t\t\t")])])],1),i("q-card-main",[i("p",{domProps:{innerHTML:t._s(t.movie.detail.description)}}),i("p",[i("strong",[t._v("Director : ")]),t._v(t._s(t.movie.detail.director))]),i("p",[i("strong",[t._v("Producer : ")]),t._v(t._s(t.movie.detail.producer))])]),i("q-list",[i("q-collapsible",{attrs:{label:"Character"}},[i("div",t._l(t.movie.people,function(e){return i("q-list",[i("q-item",[i("dl",{staticClass:"horizontal"},[i("dt",[t._v("Name")]),i("dd",[t._v(t._s(e.name))]),i("dt",[t._v("Age")]),i("dd",[t._v(t._s(e.age))]),i("dt",[t._v("Eye Color")]),i("dd",[t._v(t._s(e.eye_color))]),i("dt",[t._v("Gender")]),i("dd",[t._v(t._s(e.gender))]),i("dt",[t._v("Hair Color")]),i("dd",[t._v(t._s(e.hair_color))])])]),i("q-item-separator")],1)}))]),i("q-collapsible",{attrs:{label:"Species"}},[i("div",t._l(t.movie.species,function(e){return i("q-list",[i("q-item",[i("dl",{staticClass:"horizontal"},[i("dt",[t._v("Name")]),i("dd",[t._v(t._s(e.name))]),i("dt",[t._v("Class")]),i("dd",[t._v(t._s(e.class))]),i("dt",[t._v("Eye Color")]),i("dd",[t._v(t._s(e.eye_color))]),i("dt",[t._v("Hair Color")]),i("dd",[t._v(t._s(e.hair_color))])])]),i("q-item-separator")],1)}))]),i("q-collapsible",{attrs:{label:"Locations"}},[i("div",t._l(t.movie.locations,function(e){return i("q-list",[i("q-item",[i("dl",{staticClass:"horizontal"},[i("dt",[t._v("Name")]),i("dd",[t._v(t._s(e.name))]),i("dt",[t._v("Climate")]),i("dd",[t._v(t._s(e.climate))]),i("dt",[t._v("Surface Water")]),i("dd",[t._v(t._s(e.surface_water))]),i("dt",[t._v("Terrain")]),i("dd",[t._v(t._s(e.terrain))])])]),i("q-item-separator")],1)}))]),i("q-collapsible",{attrs:{label:"Vehicles"}},[i("div",t._l(t.movie.vehicles,function(e){return i("q-list",[i("q-item",[i("dl",{staticClass:"horizontal"},[i("dt",[t._v("Name")]),i("dd",[t._v(t._s(e.name))]),i("dt",[t._v("Description")]),i("dd",[t._v(t._s(e.description))]),i("dt",[t._v("Length")]),i("dd",[t._v(t._s(e.length))]),i("dt",[t._v("Vehicle Class")]),i("dd",[t._v(t._s(e.vehicle_class))])])]),i("q-item-separator")],1)}))])],1)],1)],1)])},a=[];s._withStripped=!0;var r={data:function(){return{stars:3}},mounted:function(){this.$store.dispatch("getMovie",{url:this.$root.ghibliApi+"films/"+this.$route.params.id})},computed:{movie:function(){return this.$store.getters.getMovie}}},d=r,o=(i("6BoH"),i("KHd+")),l=Object(o["a"])(d,s,a,!1,null,"d1b570ce",null);e["default"]=l.exports},"6BoH":function(t,e,i){"use strict";var s=i("KNcp"),a=i.n(s);a.a},KNcp:function(t,e,i){}}]);