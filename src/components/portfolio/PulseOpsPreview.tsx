import { cn } from "@/lib/utils";

const services = [
  {
    name: "api-gateway",
    status: "healthy",
    latency: "42ms",
  },
  {
    name: "auth-service",
    status: "healthy",
    latency: "18ms",
  },
  {
    name: "data-service",
    status: "degraded",
    latency: "284ms",
  },
  {
    name: "notification",
    status: "healthy",
    latency: "61ms",
  },
] as const;

const requests = [
  {
    method: "GET",
    path: "/api/services",
    status: 200,
  },
  {
    method: "POST",
    path: "/api/incidents",
    status: 201,
  },
  {
    method: "GET",
    path: "/api/overview",
    status: 200,
  },
  {
    method: "GET",
    path: "/api/services/auth",
    status: 200,
  },
] as const;

const chartValues = [
  28, 35, 42, 38, 51, 47,
  55, 62, 58, 70, 65, 72,
  68, 80, 74, 76, 71, 78,
  82, 79, 85, 88, 84, 91,
  87, 90, 85, 92, 88, 94,
];

export function PulseOpsPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
      <BrowserBar domain="pulseops.bborisov.dev" />

      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="font-display text-[13px] font-bold text-text">
              PulseOps
            </span>

            <span className="ml-2 font-mono text-[9px] text-text-muted">
              Operations Monitor
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />

            <span className="font-mono text-[9px] text-emerald-600">
              Live
            </span>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            [
              "Services",
              "12",
              "4 monitored",
            ],
            [
              "Requests/min",
              "3.2k",
              "+12% vs avg",
            ],
            [
              "Error Rate",
              "0.08%",
              "↓ from 0.12%",
            ],
            [
              "P95 Latency",
              "84ms",
              "within SLA",
            ],
          ].map(
            ([
              label,
              value,
              sub,
            ]) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-white p-2.5"
              >
                <div className="mb-1 font-mono text-[8px] text-text-muted">
                  {label}
                </div>

                <div className="font-display text-[16px] font-bold text-text">
                  {value}
                </div>

                <div className="font-mono text-[8px] text-emerald-600">
                  {sub}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mb-4 rounded-lg border border-border bg-white p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
              Traffic · Last 60min
            </span>

            <span className="font-mono text-[9px] text-accent">
              req/min
            </span>
          </div>

          <div className="flex h-14 items-end gap-1">
            {chartValues.map(
              (value, index) => (
                <div
                  key={`${value}-${index}`}
                  className={cn(
                    "flex-1 rounded-t",
                    index ===
                      chartValues.length -
                      1
                      ? "bg-accent"
                      : "bg-blue-100",
                  )}
                  style={{
                    height: `${(value / 94) *
                      100
                      }%`,
                  }}
                />
              ),
            )}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-3">
            <div className="mb-2 font-mono text-[9px] uppercase tracking-wider text-text-muted">
              Service Health
            </div>

            <div className="space-y-1.5">
              {services.map(
                (service) => (
                  <div
                    key={
                      service.name
                    }
                    className="flex items-center gap-2"
                  >
                    <span
                      className={cn(
                        "size-1.5 shrink-0 rounded-full",
                        service.status ===
                          "healthy"
                          ? "bg-emerald-500"
                          : "bg-amber-500",
                      )}
                    />

                    <span className="min-w-0 flex-1 truncate font-mono text-[9px] text-text">
                      {
                        service.name
                      }
                    </span>

                    <span className="font-mono text-[9px] text-text-muted">
                      {
                        service.latency
                      }
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white p-3">
            <div className="mb-2 font-mono text-[9px] uppercase tracking-wider text-text-muted">
              Request Stream
            </div>

            <div className="space-y-1.5">
              {requests.map(
                (
                  request,
                  index,
                ) => (
                  <div
                    key={`${request.path}-${index}`}
                    className="flex items-center gap-1.5"
                  >
                    <span
                      className={cn(
                        "w-7 font-mono text-[8px] font-medium",
                        request.method ===
                          "POST"
                          ? "text-teal"
                          : "text-accent",
                      )}
                    >
                      {
                        request.method
                      }
                    </span>

                    <span className="min-w-0 flex-1 truncate font-mono text-[8px] text-text-secondary">
                      {
                        request.path
                      }
                    </span>

                    <span className="rounded bg-emerald-50 px-1 py-0.5 font-mono text-[8px] text-emerald-700">
                      {
                        request.status
                      }
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowserBar({
  domain,
}: {
  domain: string;
}) {
  return (
    <div className="flex items-center gap-2 border-b border-border bg-slate-100 px-4 py-2.5">
      <div className="flex gap-1.5">
        <span className="size-2.5 rounded-full bg-[#FC5756]" />
        <span className="size-2.5 rounded-full bg-[#FDBC2C]" />
        <span className="size-2.5 rounded-full bg-[#34C749]" />
      </div>

      <div className="mx-3 flex flex-1 items-center gap-2 rounded border border-border bg-white px-3 py-1">
        <span className="size-2 rounded-full bg-emerald-500" />

        <span className="font-mono text-[9px] text-text-muted">
          {domain}
        </span>
      </div>
    </div>
  );
}