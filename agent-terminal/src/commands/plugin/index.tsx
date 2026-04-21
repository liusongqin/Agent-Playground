import type { Command } from '../../commands.js'

const plugin = {
  type: 'local-jsx',
  name: 'plugin',
  aliases: ['plugins', 'marketplace'],
  description: 'Manage Agent Terminal plugins',
  immediate: true,
  load: () => import('./plugin.js'),
} satisfies Command

export default plugin
