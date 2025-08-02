<script>
export default {
  name: 'TfNodeRender',
  props: {
    nodeData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  render() {
    return <div class="tf-node-render">{this.nodeData.id}</div>;
  },
};
</script>
