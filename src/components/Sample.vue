<style lang="scss">
.fields .field {
  .field-label {
    text-align: right;
    padding-right: 1rem;
    font-weight: 500;
  }
}
</style>
<template>
  <div class="card border" v-if="giftcode">
    <div class="card-header">
      <h4 class="card-title" v-trans:condition_form>Condition Form</h4>
    </div>
    <div class="card-body">
      <v-fields v-bind:source="{ form: form, fields: fields }"></v-fields>
      <v-fields
        v-if="form.conditionType == 'user_id_match'"
        v-bind:source="{
          form: state.conditionForm,
          fields: state.conditionFields,
        }"
      ></v-fields>
    </div>
  </div>
</template>
<script>
module.exports = {
  props: {
    source: null,
  },
  data() {
    return {
      fields: null,
      state: {
        conditionForm: {
          userId: null,
        },
        conditionFields: null,
      },
    };
  },
  watch: {
    "state.conditionForm.userId"(newUserId, oldUserId) {
      this.syncFromConditionForm();
    },
    "form.conditionType"(newType, oldType) {
      this.syncToConditionForm();
    },
  },
  computed: {
    giftcode() {
      return up4d.get(this.source, "giftcode");
    },
    form() {
      return up4d.get(this.source, "form");
    },
  },
  mounted() {
    this.fields = this.genFields();
    this.state.conditionFields = this.genConditionFields();
    this.syncToConditionForm();
  },
  methods: {
    syncToConditionForm() {
      if (this.form.conditionType === "user_id_match") {
        this.state.conditionForm.userId = this.form.condition;
      } else if (this.form.conditionType === "none") {
        this.state.conditionForm.userId = null;
      }
    },
    syncFromConditionForm() {
      if (this.form.conditionType === "user_id_match") {
        this.form.condition = this.state.conditionForm.userId;
      } else if (this.form.conditionType === "none") {
        this.form.condition = null;
      }
    },
    genFields() {
      return [
        {
          code: "conditionType",
          title: "Condition Type",
          type: "enum",
          input: "select",
          options: [
            {
              value: "none",
              title: "None",
            },
            {
              value: "user_id_match",
              title: "User ID Match",
            },
          ],
        },
      ];
    },
    genConditionFields() {
      return [
        {
          code: "userId",
          title: "User ID",
        },
      ];
    },
  },
};
</script>
