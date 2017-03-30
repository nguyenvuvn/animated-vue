import GenericTransition from '../../common/generic-transition'
import PACKAGE_COMPONENT_PREFIX from '../../common/config'

let single = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'rotate-out', undefined, 'rotateOut')
let group = new GenericTransition(PACKAGE_COMPONENT_PREFIX + 'group-rotate-out', undefined, 'rotateOut', true)

export default { single, group } 