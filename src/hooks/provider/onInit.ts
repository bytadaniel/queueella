import { BaseProvider } from '../../models/Provider.model'

/**
 * Асинхронный хук инициализации провайдера. Как правило, используется,
 * чтобы разрешить все промисы, приходящие из I/O
 */
export async function onProviderInit (providers: BaseProvider[]) {
  for (const provider of providers) {
    await provider.init()
  }
}