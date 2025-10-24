<script>
export default {
  name: 'VpNode',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('change', this.data.id, e.target.value);
    },
  },
  render() {
    console.log('render VpNode');
    return (
      <div>
        <label>Node:{this.data.name}</label>
        <input
          type="text"
          value={this.data.name}
          onChange={this.handleChange}
        />
      </div>
    );
  },
};
</script>
