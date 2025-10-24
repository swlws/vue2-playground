<script>
export default {
  name: 'VpList',
  components: {
    VpNode: () => import('./vp-node.vue'),
  },
  data() {
    return {
      data: {
        'id-001': { id: 'id-001', label: '001' },
      },
    };
  },
  computed: {
    nodeList() {
      console.log('computed nodeList');
      return Object.keys(this.data).map((id) => ({
        key: id,
        data: this.data[id],
      }));
    },
  },
  methods: {
    addNode() {
      const newNode = {
        id: `id-${Math.random()}`,
        label: `${Math.random()}`,
      };
      this.$set(this.data, newNode.id, newNode);
    },
    handleChange(id, value) {
      this.$set(this.data[id], 'name', value);
    },
  },
  render() {
    console.log('Render VpList', this.data);

    return (
      <section>
        <h1>List</h1>
        <aside>
          <button onClick={this.addNode}>Add Node</button>
        </aside>

        {this.nodeList.map((item) => (
          <VpNode
            key={item.key}
            data={item.data}
            onChange={this.handleChange}
          />
        ))}
      </section>
    );
  },
};
</script>
