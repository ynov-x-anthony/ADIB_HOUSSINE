type Props = { onClose: () => void }

// Mission : cette modale s'ouvre/se ferme, mais rien n'indique à un lecteur
// d'écran qu'il s'agit d'une boîte de dialogue, et Échap ne fait rien.

import { useId, useState } from 'react'

export default function Accordion({ title, children }: Props) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className="accordion">
      <button
        className="accordion-trigger"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        {title} {expanded ? '▲' : '▼'}
      </button>
      {expanded && (
        <div id={panelId} className="accordion-panel">
          {children}
        </div>
      )}
    </div>
  )
}
