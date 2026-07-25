const LAUNCH = Date.parse("2026-07-20T07:01:00Z");

export function ProductHuntBadge() {
    if (Date.now() < LAUNCH) return null;

    return (
        <a
            href="https://www.producthunt.com/products/formy?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-formy"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                alt="Formy - One POST endpoint per form. | Product Hunt"
                width="250"
                height="54"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1200058&theme=neutral&t=1784402077107"
            />
        </a>
    );
}
