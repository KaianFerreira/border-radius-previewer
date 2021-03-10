<template>
  <section>
    <div class="content">
      <div class="dummy-div" :style="stylizedCss">
        <div class="top">
          <div>
            <input v-model="topLeft" type="number" min="0" :max="maxValue">
            <input v-model="topLeft" type="range" min="0" :max="maxValue">
          </div>
          <div>
            <input v-model="topLeft" type="number" min="0" :max="maxValue">
            <input v-model="topRight" type="range" min="0" :max="maxValue">
          </div>
        </div>
        <div class="middle">
          <pre>
            -webkit-border-radius: {{stylizedCss['-webkit-border-radius']}}; <br>
            -moz-border-radius: {{stylizedCss['-moz-border-radius']}}; <br>
            border-radius: {{stylizedCss['border-radius']}};
          </pre>
          <K-Input/>
        </div>
        <div class="bottom">
          <div>
            <input v-model="bottomLeft" type="number" min="0" :max="maxValue">
            <input v-model="bottomLeft" type="range" min="0" :max="maxValue">
          </div>
          <div>
            <input v-model="bottomRight" type="number" min="0" :max="maxValue">
            <input v-model="bottomRight" type="range" min="0" :max="maxValue">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    stylizedCss () {
      return {
        '-webkit-border-radius': `${this.topLeft > this.maxValue ? this.maxValue : this.topLeft}px ${this.topRight > this.maxValue ? this.maxValue : this.topRight}px ${this.bottomRight > this.maxValue ? this.maxValue : this.bottomRight}px ${this.bottomLeft > this.maxValue ? this.maxValue : this.bottomLeft}px`,
        '-moz-border-radius': `${this.topLeft > this.maxValue ? this.maxValue : this.topLeft}px ${this.topRight > this.maxValue ? this.maxValue : this.topRight}px ${this.bottomRight > this.maxValue ? this.maxValue : this.bottomRight}px ${this.bottomLeft > this.maxValue ? this.maxValue : this.bottomLeft}px`,
        'border-radius': `${this.topLeft > this.maxValue ? this.maxValue : this.topLeft}px ${this.topRight > this.maxValue ? this.maxValue : this.topRight}px ${this.bottomRight > this.maxValue ? this.maxValue : this.bottomRight}px ${this.bottomLeft > this.maxValue ? this.maxValue : this.bottomLeft}px`
      }
    }
  },
  data () {
    return {
      maxValue: 350,
      topLeft: 0,
      topRight: 0,
      bottomLeft: 0,
      bottomRight: 0
    }
  }

}
</script>
<style lang="scss" scoped>
  .dummy-div {
    padding: 100px;
    height: 500px;
    width: 500px;
    border: 1px solid red;
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pre {
        text-align: left;
        white-space: normal;
        background: #f4f4f4;
        border: 1px solid #ddd;
        border-left: 3px solid #f36d33;
        color: #666;
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1em 1.5em;
        display: block;
        word-wrap: break-word;
    }
    .bottom, .top {
      display: flex;
      justify-content: space-between;
      div {
        margin: 10px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        input {
          border: none;
          outline: none;
          [number] {
            width: 50px !important;
            padding: 2px !important;
          }
        }
      }
    }
  }
</style>
