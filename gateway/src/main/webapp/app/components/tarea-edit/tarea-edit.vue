<template>
    componente
    <div>
      <b-form-group label="ID" label-for="tarea-id">
        <p id="tarea-id" v-text="tarea.id"></p>
      </b-form-group>
  
      <b-form-group
        label="Nombre"
        label-for="nombre-id"
        :state="isNombreValid()"
        invalid-feedback="Debe ingresar mínimo 3 caracteres y máximo 50."
      >
        <b-form-input
          id="nombre-id"
          :state="isNombreValid()"
          v-model="tarea.nombre"
          placeholder="Ingresa el nombre de la tarea"
          :readonly="readonly"
        ></b-form-input>
      </b-form-group>
  
      <b-form-group
        label="Descripción"
        label-for="description-id"
        :state="isDescripcionValid()"
        invalid-feedback="Debe ingresar mínimo 3 caracteres y máximo 100."
      >
        <b-form-textarea
          id="description-id"
          :state="isDescripcionValid()"
          v-model="tarea.descripcion"
          placeholder="Ingresa la descripción de la tarea"
          :readonly="readonly"
        ></b-form-textarea>
      </b-form-group>
  
      <b-form-group
        label="Fecha límite"
        label-for="deadline-id"
        :state="isDateValid()"
        invalid-feedback="La fecha debe ser mayor o igual a la fecha actual"
      >
        <b-form-datepicker
          id="deadline-id"
          :state="isDateValid()"
          v-model="tarea.fechaLimite"
          value-as-date
          locale="es"
          :readonly="readonly"
        ></b-form-datepicker>
      </b-form-group>
  

    </div>
  </template>

<script lang="ts" src="./tarea-edit.component.ts"></script>