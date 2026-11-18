import BasicSyntax from './components/BasicSyntax.tngl';
import ExtraComponent from './ExtraComponent.tngl';

document.body.appendChild(BasicSyntax({optionalMessage: 'Tangle', requiredCount: 5}));
document.body.appendChild(ExtraComponent());

